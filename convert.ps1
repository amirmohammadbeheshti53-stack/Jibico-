$root = 'C:\Jibico'
$next = 'C:\Jibico\jibico-next'
$pages = @('about','articles','videos','products','shop','subs','online','crm','support')
$titles = @{
  about='جیبیکو چیست؟'; articles='مقالات'; videos='ویدیوهای آموزشی';
  products='محصولات آموزشی'; shop='فروشگاه'; subs='اشتراک‌ها';
  online='آنلاین‌سازی کسب‌وکار'; crm='CRM فروش'; support='پشتیبانی'
}

function Esc([string]$s){
  $s = $s.Replace('\','\\')
  $s = $s.Replace('`','\`')
  $s = $s.Replace('${','\${')
  return $s
}

foreach($p in $pages){
  $f = Join-Path $root "$p.html"
  if(!(Test-Path $f)){ Write-Host "SKIP $p"; continue }
  $text = Get-Content $f -Raw -Encoding UTF8

  $styles  = ([regex]::Match($text, '(?s)<style>(.*?)</style>')).Groups[1].Value
  $content = ([regex]::Match($text, '(?s)</header>(.*?)<footer>')).Groups[1].Value

  $dataSrcs = @()
  foreach($mm in [regex]::Matches($text, '<script src="([^"]+)"></script>')){
    $u = $mm.Groups[1].Value
    if($u -notmatch 'link-fix'){ $dataSrcs += $u }
  }

  $inlines = [regex]::Matches($text, '(?s)<script>(.*?)</script>')
  $js = ''
  if($inlines.Count -gt 1){ $js = $inlines[$inlines.Count-1].Groups[1].Value }

  # حذف بخش‌های مشترک هدر قدیمی (Next خودش داره)
  $js = [regex]::Replace($js, '(?s)var SEARCH_INDEX=.*?function toast\(', 'function toast(')
  $js = [regex]::Replace($js, '(?s)window\.openAnForm.*?window\.closeAnnounce=function\(\)\{.*?\};', '')
  $js = [regex]::Replace($js, 'window\.togglePanel=[^\r\n]+\r?\n', '')
  $js = [regex]::Replace($js, 'window\.toggleSub=[^\r\n]+\r?\n', '')
  $js = [regex]::Replace($js, 'window\.toggleSearch=[^\r\n]+\r?\n', '')
  $js = [regex]::Replace($js, '(?s)window\.addEventListener\(.scroll\..*?\{passive:true\}\);', '')
  $js = $js.Replace('azmoon.html','/quiz/')

  # بازنویسی لینک‌های داخلی محتوا به روت‌های Next
  $content = $content.Replace('href="index.html"','href="/"')
  $content = $content.Replace('href="azmoon.html"','href="/quiz/"')
  foreach($q in $pages){ $content = $content.Replace('href="'+$q+'.html"', 'href="/'+$q+'"') }

  $dir = Join-Path $next "app\$p"
  if(!(Test-Path $dir)){ New-Item -ItemType Directory -Path $dir | Out-Null }

  $dj = 'export const styles = `' + (Esc $styles) + '`;' + "`n" + 'export const html = `' + (Esc $content) + '`;' + "`n"
  Set-Content -Path (Join-Path $dir 'data.js') -Value $dj -Encoding UTF8

  $scripts = ''
  foreach($u in $dataSrcs){ $scripts += '      <script src="' + $u + '"></script>' + "`n" }
  $scripts += '      <script src="/pg-' + $p + '.js"></script>' + "`n"

  $pj = @"
import { styles, html } from './data.js'

export const metadata = { title: '$($titles[$p]) | جیبیکو' }

export default function Page(){
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{__html: html}} />
$scripts    </>
  )
}
"@
  Set-Content -Path (Join-Path $dir 'page.jsx') -Value $pj -Encoding UTF8
  Set-Content -Path (Join-Path $next "public\pg-$p.js") -Value $js -Encoding UTF8
  Write-Host "OK $p"
}

Copy-Item (Join-Path $root 'articles-data-*.js') (Join-Path $next 'public\') -Force

# لینک‌های هدر/فوتر/صفحه اصلی به روت‌های داخلی
$files = @((Join-Path $next 'components\Header.jsx'), (Join-Path $next 'components\Footer.jsx'), (Join-Path $next 'app\page.jsx'))
foreach($ff in $files){
  $c = Get-Content $ff -Raw -Encoding UTF8
  foreach($q in $pages){ $c = $c.Replace("SITE+'/"+$q+".html'", "'/"+$q+"'") }
  Set-Content $ff -Value $c -Encoding UTF8
}
Write-Host 'ALL DONE'


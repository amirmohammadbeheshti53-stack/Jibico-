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

function ScopeCss([string]$css){
  $css = [regex]::Replace($css, '/\*[\s\S]*?\*/', '')
  $eval = [System.Text.RegularExpressions.MatchEvaluator]{
    param($m)
    if($m.Groups[1].Success){
      $sel = $m.Groups[1].Value
      if($sel.Trim().StartsWith('@')){ return $m.Value }
      $out = @()
      foreach($p in ($sel -split ',')){
        $t = $p.Trim()
        if($t -eq ''){ continue }
        if($t -match '^(from|to|\d+%)$'){ $out += $t; continue }
        if($t -match '^(body|html|\*|:root)$'){ $out += '.oldpage'; continue }
        if($t -match '^(body|html|\*|:root)\b'){ $out += ('.oldpage ' + ($t -replace '^(body|html|\*|:root)','')); continue }
        if($t.StartsWith('.oldpage')){ $out += $t; continue }
        $out += ('.oldpage ' + $t)
      }
      return (($out -join ',') + '{')
    }
    return $m.Value
  }
  return [regex]::Replace($css, '@media[^{]*\{|@keyframes[^{]*\{|([^{}]+)\{', $eval)
}

$hide = '.oldpage #overlay,.oldpage #mPanel,.oldpage #searchRow,.oldpage #toTop,.oldpage #announceBar,.oldpage #announceForm,.oldpage #prog{display:none!important}'
$allCss = ''

foreach($p in $pages){
  $f = Join-Path $root "$p.html"
  if(!(Test-Path $f)){ Write-Host "SKIP $p"; continue }
  $text = Get-Content $f -Raw -Encoding UTF8

  $styles  = ([regex]::Match($text, '(?s)<style>(.*?)</style>')).Groups[1].Value
  $content = ([regex]::Match($text, '(?s)</header>(.*?)<footer>')).Groups[1].Value

  $dataSrcs = @()
  foreach($mm in [regex]::Matches($text, '<script src="([^"]+)"></script>')){
    $u = $mm.Groups[1].Value
    if($u -notmatch 'link-fix'){
      if($u -notmatch '^(http|/)'){ $u = '/' + $u }
      $dataSrcs += $u
    }
  }

  $inlines = [regex]::Matches($text, '(?s)<script>(.*?)</script>')
  $js = ''
  if($inlines.Count -gt 1){ $js = $inlines[$inlines.Count-1].Groups[1].Value }

  $js = [regex]::Replace($js, '(?s)var SEARCH_INDEX=.*?function toast\(', 'function toast(')
  $js = [regex]::Replace($js, '(?s)window\.openAnForm.*?window\.closeAnnounce=function\(\)\{.*?\};', '')
  $js = [regex]::Replace($js, 'window\.togglePanel=[^\r\n]+\r?\n', '')
  $js = [regex]::Replace($js, 'window\.toggleSub=[^\r\n]+\r?\n', '')
  $js = [regex]::Replace($js, 'window\.toggleSearch=[^\r\n]+\r?\n', '')
  $js = [regex]::Replace($js, '(?s)window\.addEventListener\(.scroll\..*?\{passive:true\}\);', '')
  $js = $js.Replace('azmoon.html','/quiz/')

  $content = $content.Replace('href="index.html"','href="/"')
  $content = $content.Replace('href="azmoon.html"','href="/quiz/"')
  foreach($q in $pages){ $content = $content.Replace('href="'+$q+'.html"', 'href="/'+$q+'"') }

  $dir = Join-Path $next "app\$p"
  if(!(Test-Path $dir)){ New-Item -ItemType Directory -Path $dir | Out-Null }

  $allCss += (ScopeCss $styles) + "`n"

  $dj = 'export const html = `' + (Esc $content) + '`;' + "`n"
  Set-Content -Path (Join-Path $dir 'data.js') -Value $dj -Encoding UTF8

  $scripts = ''
  foreach($u in $dataSrcs){ $scripts += '      <script src="' + $u + '"></script>' + "`n" }
  $scripts += '      <script src="/pg-' + $p + '.js"></script>' + "`n"

  $pj = @"
import { html } from './data.js'
import '../oldpages.css'

export const metadata = { title: '$($titles[$p]) | جیبیکو' }

export default function Page(){
  return (
    <>
      <div className="oldpage" dangerouslySetInnerHTML={{__html: html}} />
$scripts    </>
  )
}
"@
  Set-Content -Path (Join-Path $dir 'page.jsx') -Value $pj -Encoding UTF8
  Set-Content -Path (Join-Path $next "public\pg-$p.js") -Value $js -Encoding UTF8
  Write-Host "OK $p"
}

$allCss += $hide
Set-Content -Path (Join-Path $next 'app\oldpages.css') -Value $allCss -Encoding UTF8

Copy-Item (Join-Path $root 'articles-data-*.js') (Join-Path $next 'public\') -Force
Write-Host 'ALL DONE'

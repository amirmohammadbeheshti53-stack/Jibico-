<?php
set_time_limit(300);
$zip = new ZipArchive();
if ($zip->open(__DIR__.'/deploy5.zip') !== true) { die('cannot open zip'); }
$made = 0;
for ($i = 0; $i < $zip->numFiles; $i++) {
    $name = $zip->getNameIndex($i);
    $clean = str_replace('\\', '/', $name);
    if ($clean === '' ) continue;
    $path = __DIR__.'/'.$clean;
    if (substr($clean, -1) === '/') { if (!is_dir($path)) mkdir($path, 0755, true); continue; }
    $dir = dirname($path);
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    file_put_contents($path, $zip->getFromIndex($i));
    $made++;
}
$zip->close();
$pages = ['quiz','dashboard','about','articles','videos','products','shop','subs','online','crm','support'];
foreach ($pages as $p) {
    if (file_exists(__DIR__.'/'.$p.'.html')) {
        if (!is_dir(__DIR__.'/'.$p)) mkdir(__DIR__.'/'.$p, 0755, true);
        rename(__DIR__.'/'.$p.'.html', __DIR__.'/'.$p.'/index.html');
    }
}
echo 'OK - extracted: '.$made.' files';
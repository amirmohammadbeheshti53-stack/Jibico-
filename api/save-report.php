<?php
require 'config.php';
if($_SERVER['REQUEST_METHOD'] !== 'POST'){ echo json_encode(['ok'=>false]); exit; }
$d = body();
$stmt = db()->prepare("INSERT INTO reports (name, mobile, archetype, skill, monet, gap, mbti, disc, bottleneck, full_json) VALUES (?,?,?,?,?,?,?,?,?,?)");
$stmt->execute([
  $d['name'] ?? null,
  $d['mobile'] ?? null,
  $d['archetype'] ?? null,
  $d['skill'] ?? 0,
  $d['monet'] ?? 0,
  $d['gap'] ?? 0,
  $d['mbti'] ?? null,
  $d['disc'] ?? null,
  $d['bottleneck'] ?? null,
  json_encode($d, JSON_UNESCAPED_UNICODE)
]);
echo json_encode(['ok'=>true, 'id'=> db()->lastInsertId()]);
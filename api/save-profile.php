<?php
require 'config.php';
if($_SERVER['REQUEST_METHOD'] !== 'POST'){ echo json_encode(['ok'=>false]); exit; }
$d = body();
if(empty($d['mobile'])){ echo json_encode(['ok'=>false,'error'=>'mobile required']); exit; }
$stmt = db()->prepare("INSERT INTO profiles (mobile, name) VALUES (?,?) ON DUPLICATE KEY UPDATE name=VALUES(name)");
$stmt->execute([$d['mobile'], $d['name'] ?? '']);
echo json_encode(['ok'=>true]);
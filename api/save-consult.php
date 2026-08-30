<?php
require 'config.php';
if($_SERVER['REQUEST_METHOD'] !== 'POST'){ echo json_encode(['ok'=>false]); exit; }
$d = body();
if(empty($d['name']) || empty($d['mobile'])){ echo json_encode(['ok'=>false,'error'=>'name/mobile required']); exit; }
$stmt = db()->prepare("INSERT INTO consults (name, mobile, job, challenge) VALUES (?,?,?,?)");
$stmt->execute([$d['name'], $d['mobile'], $d['job'] ?? null, $d['challenge'] ?? null]);
echo json_encode(['ok'=>true, 'id'=> db()->lastInsertId()]);
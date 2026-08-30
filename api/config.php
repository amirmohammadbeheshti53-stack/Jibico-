<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

$DB_HOST = 'localhost';
$DB_NAME = 'jibicocl_amir123';
$DB_USER = 'jibicocl_amir123';   // اگه یوزرت متفاوته عوضش کن
$DB_PASS = 'amir123AMIR456';      // ⚠️ رمزی که یادداشت کردی

function db(){
  global $DB_HOST,$DB_NAME,$DB_USER,$DB_PASS;
  static $pdo = null;
  if($pdo === null){
    try{
      $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4", $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
      ]);
    }catch(Exception $e){
      http_response_code(500);
      echo json_encode(['ok'=>false,'error'=>'db connection failed']);
      exit;
    }
  }
  return $pdo;
}

function body(){
  return json_decode(file_get_contents('php://input'), true) ?: [];
}
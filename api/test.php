<?php
require 'config.php';
db();
echo json_encode(['ok'=>true,'db'=>'connected']);
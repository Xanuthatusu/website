<?php
ob_start();
session_start();

// database credentials
define('DBHOST', 'localhost');
define('DBUSER', 'blog');
define('DBPASS', 'insecure123');
define('DBNAME', $_SERVER['DOCUMENT_ROOT'].'/db.sql');

$db = new PDO('sqlite:'.DBNAME);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// set timezone
date_default_timezone_set('America/Denver');

// load classes as needed
function __autoload($class) {

  $class = strtolower($class);

  $classpath = 'classes/class.'.$class.'.php';
  if (file_exist($classpath)) {
    require_once $classpath;
  }

  $classpath = '../classes/class.'.$class.'.php';
  if (file_exist($classpath)) {
    require_once $classpath;
  }
}
?>

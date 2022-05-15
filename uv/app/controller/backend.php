<?php
	require '../Database.php';
	require '../model/form.php';
	require '../model/view.php';
	
    /*spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
	});*/ //AUTOLOADER
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
	$method = $_SERVER['REQUEST_METHOD'];
	switch ($method) {
		case 'GET':
		listAllItems();
		break;
		case 'POST':
		save();
		break;
	}

	
?>
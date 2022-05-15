<?php
	
    /*spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
	});*/ //AUTOLOADER
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
	
	function save() {
		$conn = getConnection();
		$postData = file_get_contents("php://input");
			
		if(isset($postData) && !empty($postData)) {
			$request = json_decode($postData);
			var_dump($request);
		
			$name = $request->name;
			$eid = $request->employee_id;
			$date = $request->date;
			$status = $request->status;
			
			$sql = "INSERT INTO `items` (`name`, `employee_id`, `procurement_date`, `status`) VALUES ('{$name}', '{$eid}', '{$date}', '{$status}');";
				
			if(mysqli_query($conn, $sql)){			
				http_response_code(201);
			}else{
				http_response_code(422);
			}
		}
	}
	
?>
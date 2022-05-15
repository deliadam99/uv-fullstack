<?php
	
    /*spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
	});*/ //AUTOLOADER
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
	
	function listAllItems() {
		$conn = getConnection();
		$items = [];
		$sql = "SELECT i.id, i.name, e.name as 'owner', i.employee_id, i.procurement_date, i.status FROM items i INNER JOIN employees e ON i.employee_id = e.id ORDER BY i.id;";
		$result= $conn->query($sql);
			
		if($result) {
            while ($row = mysqli_fetch_assoc($result)) {
				$items[] = $row;
            }
			echo json_encode($items);
        } else{
			http_response_code(404);
		}
	}
	
?>
<?php
include("obj/dbConn.php");
$taskName = $_POST['taskInput'];
#echo $taskName;

$sql = "INSERT INTO todo_tasks(TASK_NAME) 
		VALUES('".$taskName."')";

$rec = $conn->query( $sql );

header("location:index.php");
?>

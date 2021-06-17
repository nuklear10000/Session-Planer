<?php
include_once 'utils_database.php';
//echo("php datei verbunden");
if(isset($_POST["nickname"])&&isset($_POST["sessionName"])){
   $nickname = $_POST["nickname"];
   $sessionName = $_POST["sessionName"];
   $statement = "INSERT INTO Sessions (Name,Nickname) VALUES ($sessionName,$nickname)";
   saveToDatabase($statement);
}
   
?>
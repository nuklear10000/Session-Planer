<?php
include_once 'utils_database.php';
if(isset($_POST["nickname"])&&isset($_POST["sessionName"])){
}

   $nickname = $_POST["nickname"];  
   $sessionName = $_POST["sessionName"];
   print($sessionName);
   $statement = "INSERT INTO Sessions (Name,Nickname) VALUES (\"$sessionName\",\"$nickname\")";
   print_r($_POST);
   print "<br>";
   print $statement;
   print "<br>";
   saveToDatabase($statement);
   //echo "everything executed";

?>
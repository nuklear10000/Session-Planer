<?php
include_once 'utils_database.php';
print("php datei verbunden");
echo("php datei verbunden");
if(isset($_POST["nickname"])||isset($_POST["sessionName"])){
   // global $nickname = $_POST["nickname"];
   // global $nickname = $_POST["sessionName"];
    
}
$statement = "INSERT INTO Sessions (Name,Nickname) VALUES ('Englisch-lern','Mave')";
saveToDatabase();

?>
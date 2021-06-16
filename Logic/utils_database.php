<?php
function connectToDatabase(){
    $connection = mysqli_connect("localhost","Data-Admin","%Hgfr13");
    $db = mysqli_select_db($connection,'Session-Database');
    if (!$connection) {
        echo('Verbindung schlug fehl:');
    }else{
        echo 'Erfolgreich verbunden';
    }
   
    $sql_statement = "INSERT INTO Sessions (Name,Nickname,PK) VALUES ('Englisch-lern','Mave',3)";
    if(!mysqli_query($connection,$sql_statement)){
        echo("Inserted");
    }
    mysqli_close($connection);
    echo"Connection established and closed";
}

function saveToDatabase(){
    connectToDatabase();


}
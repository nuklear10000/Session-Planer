<?php
function connectToDatabase(){
    $connection = mysqli_connect('localhost','Data-Admin','%Hg3fr13');
    $db = mysqli_select_db($connection,'Session-Database');
    if (!$connection) {
        echo'Verbindung schlug fehl:' ;
    }else{
        echo 'Erfolgreich verbunden';
        return $connection;
    }
}
function executeStatement($connection, $sql_statement){
 mysqli_query($connection,$sql_statement);
}

function saveToDatabase($sql_statement){
    $connection = connectToDatabase();
    executeStatement($connection,$sql_statement);
}

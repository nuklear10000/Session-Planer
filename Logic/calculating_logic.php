<?php

function saveToDatabase(){
    connectToDatabase();
}

function connectToDatabase(){
    $connection = mysqli_connect("localhost","Data-Admin","%Hgfr13");
    $db = mysqli_select_db($connection,'Session-Database');
    if (!$connection) {
        die('Verbindung schlug fehl:');
    }
    echo 'Erfolgreich verbunden';
    mysqli_close($connection);
    echo"Connection established and closed";
}
?>
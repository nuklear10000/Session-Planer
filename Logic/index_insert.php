<?php
include_once 'utils_database.php';
if(isset($_POST["nickname"])&&isset($_POST["sessionName"])){
    //session speichern
    setcookie("sessionName","the name of the Session",time()+30*60*24*60);
}
//$_POST["sessionName"]
  
   $nickname = $_POST["nickname"];  
   $sessionName = $_POST["sessionName"];
   //print($sessionName);
   $statement = "INSERT INTO Sessions (Name,Nickname) VALUES (\"$sessionName\",\"$nickname\")";
   //print_r($_POST);
   //print "<br>";
   //print $statement;
   //print "<br>";
   saveToDatabase($statement);
   //echo "everything executed";
   //code from 
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calendar</title>
    <link rel="stylesheet" href="test_style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <div class="calendar">
        <div class="month">
          <i class="fas fa-angle-left prev"></i>
          <div class="date">
            <h1></h1>
            <p></p>
          </div>
          <i class="fas fa-angle-right next"></i>
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <form action = "../Website/Timetable/Timetable.html">
        <div class="days"></div>
        <input type = "submit" value = "Enter Time">
        </form>
    <script src="test_script.js" type="text/javascript"></script>
    
  </body>
</html>

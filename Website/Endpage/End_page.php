<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="End_page_css.css">
    <title>Confirm Page</title>

</head>
<body>
    <div class="anzeige">
        <?php
        include_once '../../Logic/utils_database.php';
        $statement = "SELECT FROM sessions WHERE Name = \"";
        getFromDatabase($statement);

        ?>

    <h1>Vorgeschlagener Termin</h1>
    <h2>Name  (bsp: Civ spielen)</h2>
    <h2>Hier steht ein Termin</h2>
    </div>

    <div class="buttons">
    <form action="../Main Table/Index.html">
        <input class="new_button" type="submit" value="New" />
    </form>

    
    <form>
        <input class="ok_button" type="submit" value="OK" />
    </form>
    </div>
</body>
</html>
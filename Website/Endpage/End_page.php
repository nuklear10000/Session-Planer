<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="End_page_css.css">
    <title>End_Page</title>
    
</head>
<body>
    <div class="anzeige">
    <?php
    $name = $_COOKIE["sessionName"];
    echo "<h2> "+$name+"<h2 >";
    ?>
    </div>

    <div class="buttons">
    <form action="../../index.html">
        <input class="new_button" type="submit" value="New" />
    </form>

    <form>
        <input class="ok_button" type="submit" value="OK" />
    </form>
    </div>
</body>
</html>
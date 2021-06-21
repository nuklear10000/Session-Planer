<?php
//array_diff = alles, was nicht doppelt vorkommt

function calcOverlappingDate(date firstDate, date secDate){
    $firstSet = array();
    //format of the date is DDMMHHMM
    $firstSet[0] = 21062020;
    $firstSet[1] = 21061410;
    echo(isEqual($firstSet[0],$firstSet[1]));

   
}

function isEqual($date,$dateTwo){
    if ($date == $dateTwo) {
        return true;
    }else{
        return false;
    }
}
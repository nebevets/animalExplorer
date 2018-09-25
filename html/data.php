<?php
$animalsJSON = file_get_contents('test.js');

$animals = json_decode($animalsJSON, true); // true makes an associative array instead of a php object

function sortFunction($a, $b) {
    return $a["name"] <=> $b["name"]; //spaceship opertor 1<=>1 returns 0 (equal), 3<=>4 returns -1 (less), 4<=>3 returns 1 (greater)
}

usort($animals, "sortFunction");

$sortedAnimals = json_encode($animals);

print_r($sortedAnimals);
?>
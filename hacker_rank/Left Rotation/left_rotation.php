<?php

function rotateLeft(int $d, array $arr){
    $n = count($arr);
    $rotated_arr = array_fill(0, $n, 0);
    for($i = 0; $i < $n; $i++){
        $rotated_arr[($n - $d+$i) % $n] = $arr[$i];
    }
    return $rotated_arr;

}


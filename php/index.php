<?php

function suma($valor1 , $valor2){
    $resultado = $valor1 + $valor2;
    print_r($resultado);
}

function resta($valor1 , $valor2){
    $resultado = $valor2 - $valor1;
    print_r($resultado);
}

function multiplicacion($valor1 , $valor2){
    $resultado = $valor1 * $valor2;
    print_r($resultado);
}

function division($valor1 , $valor2){
    $resultado = $valor2 / $valor1;
    print_r($resultado);
}

suma(8,15);
resta(8,15);
multiplicacion(8,15);
division(8,15);
?>
let num1 = parseInt(prompt('Ingrese un numero'));
let num2 = parseInt(prompt('Ingrese otro numero'));
let operador = prompt('Elija un Operador, +, -, * o /');

function calculadora(numero1,numero2,operador){
    let resultado;
    switch(operador){
        case operador == '+':
            numero1 + numero2;
            break;
        case operador == '-':
            numero1 - numero2;
            break;
        case operador == '*':
            numero1 * numero2;
            break;
        case operador == '/':
            numero1 / numero2;
            break;
        default:
    }
    console.log(resultado)
}

calculadora(num1,num2,operador);
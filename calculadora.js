let num1 = parseInt(prompt('Ingrese un numero'));
let num2 = parseInt(prompt('Ingrese otro numero'));
let operador = prompt('Elija un Operador, +, -, * o /');

function calculadora(numero1,numero2,operador){
    let resultado;
    switch(operador){
        case '+':
            resultado ='El resultado de la suma es: ' + numero1 + numero2 ;
            console.log('Se ejecuta +')
            break;
        case '-':
            resultado ='El resultado de la resta es: ' + numero1 - numero2;
            console.log('Se ejecuta -')
            break;
        case '*':
            resultado ='El resultado de la multiplicacion es: ' + numero1 * numero2;
            console.log('Se ejecuta *')
            break;
        case '/':
            resultado ='El resultado de la division es: ' + numero1 / numero2;
            console.log('Se ejecuta /')
            break;
        default:
    }
    console.log(alert(resultado));
}

calculadora(num1,num2,operador);
//primero operacion
//segundo y tercero piden el valor
//y con un switch hacer la operacion

let operator = prompt('Ingrese Operación:');
operator = operator.toLowerCase().trim();
const value1 = prompt('Ingrese el primer valor:');
const value2 = prompt('Ingrese segundo valor:');
let result;

switch (operator) {
    case 'suma':
        result = operator + ' ' +(parseFloat(value1)+parseFloat(value2));
        break;
    case 'resta':
        result = operator + ' ' +(parseFloat(value1)-parseFloat(value2));
        break;
    case 'multiplicacion':
        result = operator + ' ' +(parseFloat(value1)*parseFloat(value2));
        break;
    case 'division':
        result = operator + ' ' +(parseFloat(value1)/parseFloat(value2));
        break;
    case 'modulo':
        result = operator + ' ' +(parseFloat(value1)%parseFloat(value2));
        break;
    default:
        result = 'La operacion que desea realizar no existe ' + operator;
        break;
}

window.alert(result);
// Operaciones.

//Funcion de sumar.
function sumar (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

//Funcion de restar.
function restar (valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
}

//Funcion de multiplicar.
function multiplicar (valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

//Funcion de dividir.
function dividir (valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}

function calculadora() {
    const valor1 = parseInt(prompt("Ingresa el primer valor ricky"));
    const valor2 = parseInt(prompt("Ahora el segundo"));
    const operacion = prompt("Que operacion queres hacer? (+ - * /) ")

    let resultado;

    switch (operacion) {
        case "+":
            alert("El resultado de la suma es " + sumar(valor1, valor2));
            break;
        case "-":
            alert("El resultado de la resta es " + restar(valor1, valor2));
            break;
        case "*":
            alert("El producto de la multiplicacion es " + multiplicar(valor1, valor2));
            break;
        case "/":
            alert("El cuociente de la division es " + dividir(valor1, valor2));
            break;
        default: (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/")
            alert("La operacion ingresada es invalida, debes ingresar el signo unicamente. (+ - * /)");
    }

if (resultado >= 100) {
    alert("Te gustan los numeros grandes ricky")
} else {
    alert("Para eso necesitaste la calculadora?")
}
}
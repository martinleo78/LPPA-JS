// Funciones
// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
function suma(numero1, numero2) {
    return numero1 + numero2;
}

// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
function suma_inteligente(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2)) {
        return NaN;
    }
    else {
        return numero1 + numero2;
    }
}
// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
function validanan(numero1) {
    return isNaN(numero1);
}

////////ejercicio_d
// A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
function suma_re_inteligente(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2)) {
        return NaN;
    }
    else {
        if (Number.isInteger(numero1) && Number.isInteger(numero2)) {
            return numero1 + numero2;
        }
        else {
            return Math.round(numero1) + Math.round(numero2);
        }
    }
}
// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.
function validaentero(numero) {
    Number.isInteger(numero);
}
function suma_re_inteligente(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2)) {
        return NaN;
    }
    else {
        if (validaentero(numero1) && validaentero(numero2)) {
            return numero1 + numero2;
        }
        else {
            return Math.round(numero1) + Math.round(numero2);
        }
    }
}
var resultado = '';
function ejercicio1a() {
    var primer_valor = document.getElementById("primer_valor").value;
    var segundo_valor = document.getElementById("segundo_valor").value;
    resultado = (parseInt(primer_valor) + parseInt(segundo_valor));
    document.getElementById('resultado').value = resultado;
}

function ejercicio1b() {
    var primer_valor = document.getElementById("primer_valor").value;
    var segundo_valor = document.getElementById("segundo_valor").value;
    resultado = ''.concat(primer_valor, segundo_valor);
    document.getElementById('resultado').value = resultado;
}

function ejercicio1c() {
    var primer_valor = document.getElementById("primer_valor").value;
    var segundo_valor = document.getElementById("segundo_valor").value;
    resultado = primer_valor.length + segundo_valor.length;
    document.getElementById('resultado').value = resultado;
}
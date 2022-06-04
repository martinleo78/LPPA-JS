function strings() {
    var texto_completo = 'AbCdEf HiJkLmNo';
    var ejercicio2a = texto_completo.toUpperCase();
    var ejercicio2b = texto_completo.substring(0, 5);
    var ejercicio2c = texto_completo.substring((texto_completo.length) - 3, (texto_completo.length));
    var ejercicio2d = texto_completo.substring(0, 1).toUpperCase() + texto_completo.substring(1, (texto_completo.length)).toLowerCase();
    var ejercicio2e = texto_completo.indexOf(' ');
    var ejercicio2f =
        texto_completo.substring(0, 1).toUpperCase()
        + texto_completo.substring(1, texto_completo.indexOf(' ')).toLowerCase()
        + ' '
        + texto_completo.substring(texto_completo.indexOf(' ') + 1, texto_completo.indexOf(' ') + 2).toUpperCase()
        + texto_completo.substring(texto_completo.indexOf(' ') + 3, texto_completo.length).toLowerCase();



    document.getElementById('texto_completo').innerHTML += texto_completo;
    document.getElementById('ejercicio2a').innerHTML += ejercicio2a;
    document.getElementById('ejercicio2b').innerHTML += ejercicio2b;
    document.getElementById('ejercicio2c').innerHTML += ejercicio2c;
    document.getElementById('ejercicio2d').innerHTML += ejercicio2d;
    document.getElementById('ejercicio2e').innerHTML += ejercicio2e;
    document.getElementById('ejercicio2f').innerHTML += ejercicio2f;
}
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function cincoonce() {
    var ejercicio3a = ''.concat(meses[4], ', ', meses[10]);
    document.getElementById('ejercicio3a').innerHTML += ejercicio3a;
    console.log(ejercicio3a); 
    
    var ejercicio3b = meses.slice();
    ejercicio3b=ejercicio3b.sort();
    document.getElementById('ejercicio3b').innerHTML += ejercicio3b;
    console.log(ejercicio3b); 

    meses.unshift("Inicial");
    meses.push("Final");
    var ejercicio3c = meses;
    document.getElementById('ejercicio3c').innerHTML += ejercicio3c;
    console.log(ejercicio3c); 

    meses.shift("Inicial");
    meses.pop("Final");
    var ejercicio3d = meses;
    document.getElementById('ejercicio3d').innerHTML += ejercicio3d;
    console.log(ejercicio3d); 

    var ejercicio3e = meses.slice();
    ejercicio3e=ejercicio3e.reverse();
    document.getElementById('ejercicio3e').innerHTML += ejercicio3e;
    console.log(ejercicio3e); 

    var ejercicio3f = meses.join('-');
    document.getElementById('ejercicio3f').innerHTML += ejercicio3f;
    console.log(ejercicio3f); 

    var ejercicio3g = meses.slice(4,11);
    document.getElementById('ejercicio3g').innerHTML += ejercicio3g;
    console.log(ejercicio3g); 


}
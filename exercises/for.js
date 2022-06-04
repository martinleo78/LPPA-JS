function losfor() {
    ////////ejercicio a
    var array = ["palabra1", "palabra2", "palabra3", "palabra4", "palabra5"];
    var cantidad = array.length;
    for (let step = 0; step < cantidad; step++) {
        alert(array[step]);
    }
    ////////ejercicio b
    for (let step = 0; step < cantidad; step++) {
        var antes = array[step];
        array[step] = array[step].slice(0, 1).toUpperCase() + array[step].slice(1, array[step].length).toLowerCase();
        alert("Antes: " + antes + " Despues: " + array[step]);
    }
    ////////ejercicio c
    var sentence = '';
    for (let step = 0; step < cantidad; step++) {
        sentence += array[step];
    }
    alert(sentence);
    ////////ejercicio d
    var array = [];
    for (let step = 0; step < 10; step++) {
        array[step]=step;
    }
    console.log(array);
    alert(array);
}
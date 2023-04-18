
var encodedString;

function encrypt() {

    var baseString = document.querySelector("#texto").value;
    encodedString = baseString.replace(/a/g, "c1");
    encodedString = encodedString.replace(/e/g, "c2");
    encodedString = encodedString.replace(/i/g, "c3");
    encodedString = encodedString.replace(/o/g, "c4");
    encodedString = encodedString.replace(/u/g, "c5");
    var baseString2 = encodedString.replace(/c1/g, "ai");
    baseString2 = baseString2.replace(/c2/g, "enter");
    baseString2 = baseString2.replace(/c3/g, "imes");
    baseString2 = baseString2.replace(/c4/g, "ober");
    baseString2 = baseString2.replace(/c5/g, "ufat");

    encodedString = baseString2;

    document.getElementById("texto").value = encodedString;
}

var decodedString;

function decrypt() {

    var baseString = document.getElementById("texto").value;
    decodedString = baseString.replace(/ai/g, "c1");
    decodedString = decodedString.replace(/enter/g, "c2");
    decodedString = decodedString.replace(/imes/g, "c3");
    decodedString = decodedString.replace(/ober/g, "c4");
    decodedString = decodedString.replace(/ufat/g, "c5");
    var baseString2 = decodedString.replace(/c1/g, "a");
    baseString2 = baseString2.replace(/c2/g, "e");
    baseString2 = baseString2.replace(/c3/g, "i");
    baseString2 = baseString2.replace(/c4/g, "o");
    baseString2 = baseString2.replace(/c5/g, "u");

    decodedString = baseString2;

    document.getElementById("texto").value = decodedString;
}

let tituloBtn = document.querySelector('#btn1');

tituloBtn.addEventListener('click', updateButton);

function updateButton() {

    if (tituloBtn.value === "Criptografar") {
        tituloBtn.value = "Limpar";

    } else {
        tituloBtn.value = "Criptografar";
    }
}

let tituloBtn2 = document.querySelector('#btn2');

tituloBtn2.addEventListener('click', updateButton2);

function updateButton2() {

    if (tituloBtn2.value === "Descriptografar") {
        tituloBtn2.value = "Limpar";

    } else {
        tituloBtn2.value = "Descriptografar";
    }
}

function limpa(campo) {
    document.getElementById(campo).value = '';
}


/*


function limpatudo() {
    var input = document.getElementById("texto").value;
    if (input != '') {
        document.getElementById("texto").value = '';
    }
    var input = document.getElementById("texto").value;
    if (input != '') {
        document.getElementById("texto").value = '';
    }
    var input = document.getElementById("texto").value;
    if (input != '') {
        document.getElementById("texto").value = '';
    }
    var input = document.getElementById("texto").value;
    if (input != '') {
        document.getElementById("texto").value = '';
    }
}
*/

function copiar() {
    var copy = document.getElementById("texto").value;
    document.getElementById("textcopy").value = copy;
    //limpa("texto");
}

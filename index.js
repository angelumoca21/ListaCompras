var verdurasFrutas = []; //Declaacion de array
var carnes = [];
var bebidas = [];

function agregarItem(){
    var inputTexto = document.getElementById("cajaTexto");
    var texto = inputTexto.value;
    console.log(texto);

    var inputCategoria = document.getElementById("opciones");
    var categoria = inputCategoria.value;
    console.log(categoria);

    var textoVerdurasFrutas = document.getElementById("listaFrutasVerduras");
    var textoCarnes = document.getElementById("listaCarnes");
    var textoBebidas = document.getElementById("listaBebidas");

    if(categoria == "verdurasFrutas")
        verdurasFrutas.push(texto);
    else if(categoria == "carnes")
        carnes.push(texto);
    else if(categoria == "bebidas")
        bebidas.push(texto);

    textoVerdurasFrutas.innerHTML = "";
    verdurasFrutas.forEach(item => textoVerdurasFrutas.innerHTML += `<li>${item}</li>`);

    textoCarnes.innerHTML = "";
    carnes.forEach(item => textoCarnes.innerHTML += `<li>${item}</li>`);

    textoBebidas.innerHTML = "";
    bebidas.forEach(item => textoBebidas.innerHTML += `<li>${item}</li>`);
}
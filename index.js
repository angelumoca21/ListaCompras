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
    if(categoria == "verdurasFrutas"){
        verdurasFrutas.push(texto);
    }
    else if(categoria == "carnes"){
        carnes.push(texto);
    }
    else if(categoria == "bebidas"){
        bebidas.push(texto);
    }
    var textoVerdurasFrutas = document.getElementById("listaFrutasVerduras");
    var textoCarnes = document.getElementById("listaCarnes");
    var textoBebidas = document.getElementById("listaBebidas");
    for(var i = 0;i < verdurasFrutas.length;i++)
    {
        textoVerdurasFrutas.innerText = verdurasFrutas[i];
    }
    for(var i = 0;i < carnes.length;i++)
    {
        textoCarnes.innerText = carnes[i];
    }
    for(var i = 0;i < bebidas.length;i++)
    {
        textoBebidas.innerText = bebidas[i];
    }
}
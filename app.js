
//Haciendolo de forma directa
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10";*/


let numeroSecreto =generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
}

//Funcion que realiza la actividad al presionar el boton Intentar funciona 
//desde el html porque esta en un onclick 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  
    //console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    //puedo usar tres iguales porque compara igualdad en valor y tipo de dato
    
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

//Haciendolo mediante el uso de una función 
asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 100');
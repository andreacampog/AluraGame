
//Haciendolo de forma directa
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10";*/


let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
}

//Funcion que realiza la actividad al presionar el boton Intentar funciona 
//desde el html porque esta en un onclick 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);      
    //console.log(numeroDeUsuario);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1)? 'vez':'veces' }`);        
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;   
        limpiarCaja();     
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');    
    numeroSecreto =generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;    
    document.querySelector('#reiniciar').setAttribute('disabled',true); //diferente al remove
    //para este caso debo agregar el atributo y setearlo en true
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();


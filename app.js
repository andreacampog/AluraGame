
//Haciendolo de forma directa
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10";*/


let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearón todos los números posibles');                
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;   
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);    
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


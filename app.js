let amigos = [];
let lista = document.querySelector('#listaAmigos');


function agregarAmigo(){
    let amigo=document.querySelector('#amigo').value;
    if(amigo){
        amigos.push(amigo);
        document.getElementById('amigo').value='';
        lista.innerHTML += `<li>${amigo}</li>`;
    }else{
        alert('Por favor, ingrese un nombre valido');
    }
    document.querySelector('#resultado').innerHTML = '';
}

function limpiarLista(){
    amigos = [];
    lista.innerHTML = '';
}

function sortearAmigo(){
    if(amigos.length){
        let amigoSorteado=amigos[(Math.floor(Math.random()*amigos.length))];
        limpiarLista();
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;
    }
    else{
        alert('No se ingresaron amigos');
    }
}



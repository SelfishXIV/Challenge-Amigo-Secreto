// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let amigos = [] ;

//funcion para agregar amigos
function agregarAmigo () {
    const input = document.getElementById("amigo");
    const amigo = input.value.trim();

    if ( amigo === ""){
        alert("Ingresa un nombre.");
        return;
    }

    if (amigos.includes(amigo)){
        alert( `${amigo} ya se encuentra en la lista, ingrese otro`)
        return;
    }

    //dejamos los nombres en el array
    amigos.push(amigo);
    //limpiamos el input para ingresar un amigo nuevo
    input.value = "";

    mostrarLista();
}

//funcion para formar la lista
function mostrarLista () {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//funcion para hacer el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    document.getElementById("resultado").textContent = `El amigo sorteado es: ${amigoSorteado} ! `;
}
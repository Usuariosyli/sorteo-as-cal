let listaDeAmigos = [];

function agregarAmigo() {
    let varInputNombreSecreto = document.getElementById("amigo");
    let varNombreIngresado = varInputNombreSecreto.value.trim();

    if (listaDeAmigos.includes(varNombreIngresado)) {
        alert(`"${varNombreIngresado}" ya está en la lista. Ingrese otro nombre.`);
        return;
    }

    if (!varNombreIngresado) {
        alert("No ha ingresado un nombre. Ingrese un nombre para continuar");
        return;
    }

    listaDeAmigos.push(varNombreIngresado);
    //Coloca el cursor en la caja de texto
    varInputNombreSecreto.value = "";
    varInputNombreSecreto.focus();

    imprimeListaNombres();
}

function imprimeListaNombres() {
    let varListaElementos = document.getElementById("listaAmigos");
    varListaElementos.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemAimprimir = document.createElement("li");
        itemAimprimir.textContent = listaDeAmigos[i];
        varListaElementos.appendChild(itemAimprimir);
    }
}

function sortearNombre() {
    if (listaDeAmigos.length === 0) {
        alert("No ha ingresado nombres para el sorteo");
        return;
    }

    let varNombreAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let varNombreSorteado = listaDeAmigos[varNombreAleatorio];

    let varResultado = document.getElementById("resultado");
    varResultado.innerHTML = `El ganador del sorteo es: <strong>${varNombreSorteado}</strong>`;

    if (varNombreSorteado = listaDeAmigos[varNombreAleatorio]) {
        document.getElementById("btn_sortear").setAttribute('disabled','true');
        return;
    }
}


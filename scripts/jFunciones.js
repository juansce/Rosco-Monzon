
let letraSelect = ""
let contador = 0
const botonNull = document.getElementById("buttResp")
const alertPlaceholder = document.getElementById("liveAlertPlaceholder")


//genera un vector de objetos ingresados por pantalla
function vectorInstancer(vecTor) {
    let letra, pregunta, respuesta

    for (let i = 0; i < vecTor.length; i += 3) {
        letra = vecTor[i].toLowerCase()
        pregunta = vecTor[i + 1].toLowerCase()
        respuesta = vecTor[i + 2].toLowerCase();
        pasaPalabraPregunta.push(new RoscoPreguntas(letra, pregunta, respuesta))
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            pasaPalabraPreguntaVocales.push(new RoscoPreguntas(letra, pregunta, respuesta))
        }
    }
}

function cargarModal(letra) {
    setLetra(letra)
    setContador()
    resetAlert()
    botonNull.disabled = false
    pasaPalabraPreguntaVocales.forEach(caracter => {
        if (letra === caracter.letra) {
            const titulo = document.getElementById("exampleModalLabel")
            titulo.innerHTML = caracter.letra
            const pregunta = document.getElementById("pregunta")
            pregunta.innerHTML = caracter.pregunta
        }
    })
}


function alert(message, type) {
    resetAlert()
    const wrapper = document.createElement('div')
    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
            <div>${message}</div>
        `
    alertPlaceholder.append(wrapper)
    setTimeout(() => {
        wrapper.remove()
    }, 1200)
}

// no esta siendo usada...
function cerrarModal() {
    const modal = document.getElementById("modalDialog")
    setTimeout(() => {
        modal.remove()
    }, 1600)
}

function resetAlert() {
    alertPlaceholder.innerHTML = ""
}

function setContador() {
    contador = 0
}

function setLetra(letra) {
    letraSelect = letra
}

function bloquearBtn(letra) {

    const vocales = {
        "a": document.getElementById("botona"),
        "e": document.getElementById("botone"),
        "i": document.getElementById("botoni"),
        "o": document.getElementById("botono"),
        "u": document.getElementById("botonu")
    }    
    return vocales[letra].disabled = true
}


function obtenerRespuesta(respFunc) {
    let msjCorrecto = "CORRECTO"
    let msjCuidado = "ICORRECTO. Prueba otra vez..."
    let msjIncorrecto = "Lo siento, perdiste un punto."
    let tipoS = "success"
    let tipoD = "danger"
    let tipoW = "warning"

    const respuesta = pasaPalabraPreguntaVocales.some(palabra => (palabra.respuesta == respFunc && letraSelect == palabra.letra))

    if (respuesta == false) {
        if (contador < 2) {
            contador++
            alert(msjCuidado, tipoW)
            document.getElementById("respuesta").value = ""
        } else {
            alert(msjIncorrecto, tipoD)
            jugadorStorage.puntos -= 1
            document.getElementById("respuesta").value = ""
            botonNull.disabled = true
            bloquearBtn(letraSelect)
        }
    } else {
        alert(msjCorrecto, tipoS)
        jugadorStorage.puntos += 1
        document.getElementById("respuesta").value = ""
        botonNull.disabled = true
        bloquearBtn(letraSelect)
    }
}
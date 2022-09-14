const showPlayer = document.getElementById("nomJugador")

let jugadorStorage = JSON.parse(localStorage.getItem("players"))
showPlayer.innerHTML = `Hola ${(jugadorStorage.nombre).toUpperCase()}, vamos a divernirnos!!!`

const traerRoscoVocales = async () => {
    const response = await fetch("../json/vocales.json")
    const vocales = await response.json()
    return vocales
}

let puntos = document.getElementById("puntosJugador")
const botResp = document.getElementById("buttResp")
botResp.addEventListener("click",() => {
    const respPlayer = document.getElementById("respuesta").value.toLowerCase()
    obtenerRespuesta(respPlayer)
    puntos.innerHTML = `Tenes ganados ${jugadorStorage.puntos} puntos`
})
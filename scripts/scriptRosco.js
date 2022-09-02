/* Desafio entregable: 

INTERACTUAR CON HTML

Alumno: Monzon, Juan Carlos
Tutor: Cantora, Matias
CODERHOUSE - JAVASCRIPT */

/* JUEGO: ROSCO - PASA PALABRA */




//Clases y objetos

class RoscoPreguntas{
    constructor(letra, pregunta, respuesta){
        this.letra = letra
        this.pregunta = pregunta
        this.respuesta = respuesta
    }   
}

let textoPreguntas = "A#Planta comestible con tallos blancos y hojas verdes. También está en la ducha.#alcachofa#B#Caja en la que se guardan medicinas.#botiquin#C#Cama en la que se llevan de un lado a otro heridos o enfermos.#camilla#D#Palabras que se escriben y se dicen como regalo a alguien.#dedicatoria#E#Mancharse un cristal con el vapor de agua.#empañar#F#Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja.#fábula#G#Preparar alimentos cocinándolos con calor.#guisar#H#Tela resistente que se cuelga de sus extremos y se utiliza como cama.#hamaca#I#Alfiler que se abrocha quedando su punta dentro de un gancho.#imperdible#J#Persona que monta a caballo.#jinete#K#Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla.#karaoke#L#Mueble formado por dos camas puestas una encima de la otra.#litera#LL#Parte de tierra baja, plana, lisa, sin alturas ni desniveles y sin montañas.#llanura#M#Salsa que se hace batiendo huevo y aceite.#mayonesa#N#Parte posterior de la cabeza situada encima del cuello.#nuca#Ñ#(Contiene la ñ) Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados.#teñir#O#Borde del mar, de un lago o de un río.#orilla#P#Quitar las arrugar a una prenda.#planchar#Q#Producto natural o preparado que sirve para quitar manchas.#quitamanchas#R#Conjunto de uvas sostenidas en un mismo tallo.#racimo#S#Enterrar semillas en la tierra para que crezcan.#sembrar#T#Asiento sin respaldo.#taburete#U#Extender mantequilla sobre una rebanada de pan.#untar#V#Persona que vive en el mismo barrio o edificio que otra.#vecino#W#Sistema de conexión inalámbrica para conectarse a internet.#wifi#X#(Contiene la x) Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas.#fénix#Y#Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo.#yunque#Z#Sonido que producen algunos insectos como la abeja o el mosquito.#zumbido"

const cargaRosco = textoPreguntas.split("#") // genera un nuevo vector
const pasaPalabraPregunta = []
const pasaPalabraPreguntaVocales = []

const showPlayer = document.getElementById("nomJugador")

let jugadorStorage = JSON.parse(localStorage.getItem("players"))
showPlayer.innerHTML = `Hola ${(jugadorStorage.nombre).toUpperCase()}, vamos a divernirnos!!!`

vectorInstancer(cargaRosco)  // genera un nuevo vector de objeto a partir del vector "cargaRosco" - incluye solo las vocales

console.log(pasaPalabraPregunta,pasaPalabraPreguntaVocales)//para pispear las respuestas

let puntos = document.getElementById("puntosJugador")
const botResp = document.getElementById("buttResp")
botResp.addEventListener("click",() => {
    const respPlayer = document.getElementById("respuesta").value.toLowerCase()
    obtenerRespuesta(respPlayer)  
    puntos.innerHTML = `Tenes ganados ${jugadorStorage.puntos} puntos`
})
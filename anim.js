// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
    { text: "Ella estaba esperando con una flor amarilla, ella lo estaba soñando con la luz en su pupila.", time: 18 },
    { text: "El amarillo del sol iluminaba la esquina, lo sentía tan cercano, lo sentía desde niña.", time: 32 },
    { text: "Ella sabía que sabía que algún día pasaría que vendría a buscarla con sus flores amarillas.", time: 47 },
    { text: "No te apures, no tengas el instante del encuentro, hasta dicho que es un hecho, no la pierdas, no hay derecho.", time: 60 },
    { text: "No te olvides que la vida casi nunca está dormida.", time: 68 },
    { text: "No venía a ser tan desierto, no se esperaba el encuentro, ella llegó en limusina amarilla por supuesto.", time: 93 },
    { text: "El se acercó de repente y la miró tan de frente, toda una vida soñada y no pudo decir nada.", time: 110 },
    { text: "Ella sabía que sabía que algún día pasaría que vendría a buscarla con sus flores amarillas.", time: 124 },
    { text: "No te apures, no tengas el instante del encuentro, hasta dicho que es un hecho, no la pierdas, no hay derecho.", time: 136 },
    { text: "No te olvides que la vida casi nunca está dormida.", time: 145 },
    { text: "Flores amarillas.", time: 161 },
    { text: "Ella sabía que sabía que algún día pasaría que vendría a buscarla con sus flores amarillas.", time: 169 }
];



function updateLyrics() {
    var currentTime = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(line => currentTime >= line.time && currentTime < line.time + 10);

    if (currentLine) {
        lyrics.style.opacity = 1;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}




setInterval(updateLyrics, );

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 6000);
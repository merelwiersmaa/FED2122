// hieronder wordt de variabele en functie aan gemaakt voor het switchen van voorkant naar zijkant foto

// de variabele krijgt de .zijkant aangewezen, en dat is het knopje waar op gedrukt wordt
var zijkant = document.querySelector(".zijkant");

// deze variabele krijgt de foto zelf toegewezen
var voorkantfoto = document.querySelector(".voorkantfoto");

// bij deze functie wordt dus de variabele voorkantfoto, veranderd van source -> "watch belowheader..." en veranderd de afbeelding dus
// dit gebeurt wanneer de variabele zijkant, wordt aangeklikt
function zijkantfoto() {
    voorkantfoto.src = "watch_belowheader/WATCH2.png"
    }
    zijkant.addEventListener("click", zijkantfoto);
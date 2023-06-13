function showAlert(){
    alert('¡Hola, esta es una prueba!');
}

function ganador(){
    alert('Felicidades!!! elegiste el boton ganador!');
}
function perdiste(){
    alert('Lo siento, no era el boton ganador');
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
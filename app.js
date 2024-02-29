// Oculta el placeholder de la caja de texto encriptador //

document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelector(".texto");

  textarea.addEventListener("focus", function () {
    textarea.classList.add("hide-placeholder");
  });

  textarea.addEventListener("blur", function () {
    if (textarea.value === "") {
      textarea.classList.remove("hide-placeholder");
    }
  });
});

// Funcionamiento del encriptador //

function encriptador() {
  let iterar = document.getElementById("encriptacion").value;

  for (let i = 0; i < iterar.length; i++) {
    let letra = iterar[i];

    if (letra === "e") {
      letra = "enter";
    } else if (letra === "i") {
      letra = "imes";
    } else if (letra === "a") {
      letra = "ai";
    } else if (letra === "o") {
      letra = "ober";
    } else if (letra === "u") {
      letra = "ufat";
    }
  }
}

// Cambio de la imagen por respuesta del encriptador //

function cambiarElemento() {
  // Obtener el contenedor y la imagen
  let contenedor = document.getElementById("contenedor-lateral");

  // Crear un nuevo párrafo
  let respuestaEncriptador = document.createElement("div");
  respuestaEncriptador.textContent = `
  
  <p>Otro Texto</p>
  <textarea id="encriptacion" placeholder="Ingresa texto para encriptar"></textarea>
  <button onclick="encriptador()">Encriptar Texto</button>
`;

  // Reemplazar la imagen con el nuevo párrafo
  contenedor.parentNode.replaceChild(respuestaEncriptador, contenedor);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const errorMessage = document.getElementById("error_message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    // Validación simple
    if (inputText === "") {
      errorMessage.textContent = "El campo de texto está vacío.";
    } else {
      errorMessage.textContent = "";
      alert("Formulario enviado correctamente");
    }
  });
});

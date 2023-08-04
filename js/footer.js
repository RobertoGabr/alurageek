document.querySelector(".footerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const inputName = document.querySelector('input[name="name"]');
  const textarea = document.querySelector('textarea[name="message"]');
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("sucessMsg");
  const button = document.querySelector(".botao-footer");

  if ((inputName.value.trim() === " ") & (textarea.value.trim() === " ")) {
    errorMsg.textContent = "Por favor, preencha todos os campos obrigatórios.";
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
    button.textContent = "Enviar Mensagem";
  } else {
    errorMsg.style.display = "none";
    successMsg.textContent = "Mensagem enviada!";
    successMsg.style.display = "block";
    button.textContent = "Enviado";

    setTimeout(function () {
      successMsg.style.display = "none";
      button.textContent = "Enviar Mensagem";
    }, 3000);

    inputName.value = "";
    textarea.value = "";
  }
}

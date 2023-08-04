document
  .querySelector(".form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "rob" && senha === "gab") {
      window.location.href = "products.html";
    } else {
      alert("Email ou senha invalido");
    }
  });

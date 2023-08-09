import { produtosServicos } from "../services/produtosServices.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault();
  const imagem = document.querySelector("[data-url]").value;
  const name = document.querySelector("[data-name]").value;
  const preco = document.querySelector("[data-preco]").value;
  const descricao = document.querySelector("[data-descricao]").value;

  await produtosServicos.criaVideo(imagem, name, preco, descricao);

  window.location.href = "./products.html";
}

formulario.addEventListener("submit", (evento) => criarVideo(evento));

import { produtosServicos } from "../services/produtosServices.js";

function estrutura() {
  const produtoMain = document.querySelector(".produtoEspecifico");
  produtoMain.innerHTML = `<div class="todos-produtos container">
  <div class="titulo">
      <h3>Todos os produtos</h3>
      <a href="addproducts.html">Adicionar produto</a>
  </div>
  <ul class="produtos"></ul>
</div>`;

  carregarProdutos();
}

function controiCard(imagem, name, preco, id, alt) {
  const produto = document.createElement("li");
  produto.setAttribute("data-id", id);

  produto.innerHTML = `
  <div class="produtosCard">
  <img src="${imagem}" class="produtosImg" alt=${alt}>
  <div class="produtosText">
    <span class="produtoTitle">${name}</span>
    <span class="produtosPrice">R$ ${preco}</span>
    <span>#${id}</span>
    <a class="editar" href="edit.html?id=${id}"><img src="assets/lapis.png" class="lapis"></a>
  </div>
</div>
  `;

  return produto;
}

function carregarProdutos() {
  const listaProdutos = document.querySelector(".produtos");

  produtosServicos
    .listaProdutos()
    .then((produtos) => {
      produtos.forEach((produto) => {
        const cardProduto = controiCard(
          produto.imagem,
          produto.name,
          produto.preco,
          produto.id,
          produto.alt
        );
        listaProdutos.appendChild(cardProduto);
      });
    })
    .catch((error) => console.error("Erro ao carregar produtos:", error));
}

estrutura();

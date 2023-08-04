import { produtosServicos } from "../services/produtosServices.js";

export const novoProduto = (imagem, name, id, preco, alt) => {
  const card = document.createElement("li");
  const conteudo = `
  <div class="produtosCard">
  <img src="${imagem}" class="produtosImg" alt=${alt}>
  <div class="produtosText">
    <span class="produtoTitle">${name}</span>
    <span class="produtosPrice">R$ ${preco}</span>
    <a href="products.html?id=${id}" class="produtosLink">Ver produto</a>
  </div>
</div>
  `;

  card.innerHTML = conteudo;

  return card;
};

const preencherProdutos = (sectionId, produtos) => {
  const section = document.getElementById(sectionId);
  const ulProdutos = section.querySelector(".produtos");

  produtos.forEach((produto) => {
    const { imagem, name, id, preco, alt } = produto;
    const novoCard = novoProduto(imagem, name, id, preco, alt);
    ulProdutos.appendChild(novoCard);
  });
};

produtosServicos
  .listaProdutos()
  .then((produtos) => {
    const produtosStarWars = produtos.filter(
      (produto) => produto.categoria === "Star Wars"
    );
    const produtosConsoles = produtos.filter(
      (produto) => produto.categoria === "Consoles"
    );
    const produtosDiversos = produtos.filter(
      (produto) => produto.categoria === "Diversos"
    );

    preencherProdutos("starWars", produtosStarWars);
    preencherProdutos("consoles", produtosConsoles);
    preencherProdutos("diversos", produtosDiversos);
  })
  .catch((error) => console.log(error));

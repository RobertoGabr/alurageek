//GET

const listaProdutos = () => {
  return fetch("http://localhost:3000/produtos").then((resposta) =>
    resposta.json().catch((error) => console.log(error))
  );
};

export const produtosServicos = {
  listaProdutos,
};

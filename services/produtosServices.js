//GET

const listaProdutos = () => {
  return fetch("http://localhost:3000/produtos").then((resposta) =>
    resposta.json().catch((error) => console.log(error))
  );
};

async function criaVideo(imagem, name, preco, descricao) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      imagem: imagem,
      name: name,
      preco: preco,
      descricao: descricao,
    }),
  });

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const produtosServicos = {
  listaProdutos,
  criaVideo,
};

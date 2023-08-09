//GET

const listaProdutos = () => {
  return fetch("https://64d3ed4667b2662bf3dcdfd2.mockapi.io/produto").then(
    (resposta) => resposta.json().catch((error) => console.log(error))
  );
};

async function criaVideo(imagem, name, preco, descricao) {
  const conexao = await fetch(
    "https://64d3ed4667b2662bf3dcdfd2.mockapi.io/produto",
    {
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
    }
  );

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const produtosServicos = {
  listaProdutos,
  criaVideo,
};

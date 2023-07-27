export default function initApi() {}

async function conectaApi() {
  const conexao = await fetch("http://localhost:3000");
  const conexaoJson = await conexao.json();

  console.log(conexaoJson);
}

conectaApi();

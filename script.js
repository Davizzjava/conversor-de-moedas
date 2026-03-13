function converterMoeda() {
  const valor = document.getElementById('valor').value;
  const moedaOrigem = document.getElementById('moedaOrigem').value;
  const moedaDestino = document.getElementById('moedaDestino').value;
  const resultado = document.getElementById('resultado');

  // Mensagem de carregamento enquanto a internet busca o valor
  resultado.innerText = "Calculando...";

  // URL da API gratuita que atualiza as taxas de câmbio
  const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

  // Indo buscar os dados na internet
  fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
      const taxa = dados.rates[moedaDestino];
      const valorConvertido = (valor * taxa).toFixed(2);
      
      // Mostrando o resultado na tela
      resultado.innerText = `${valorConvertido} ${moedaDestino}`;
    })
    .catch(erro => {
      resultado.innerText = "Erro na conexão. Tente novamente.";
    });
}

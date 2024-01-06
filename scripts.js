const key = "a4d0d806a661bad9c35a6a27b505993c";

function colocarDadosTela(dados) {
  console.log(dados);

  if (dados.cod === 200) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = "Agora " +
      Math.floor(dados.main.temp) + "°C";
      document.querySelector(".temp-max").innerHTML = "máxima " + Math.floor(dados.main.temp_max) + "°C";
      document.querySelector(".temp-min").innerHTML = "mínima  " +
      Math.floor(dados.main.temp_min) + "°C";
    document.querySelector(".texto-previsao").innerHTML =
      dados.weather[0].description;
    document.querySelector(".umidade").innerHTML =
      "Umidade: " + dados.main.humidity + "%";
    document.querySelector(
      ".img-previsao"
    ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  } else {
  
    document.querySelector(".cidade").innerHTML = "Cidade não encontrada";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".texto-previsao").innerHTML = "";
    document.querySelector(".umidade").innerHTML = "";
  }
}

async function buscarCidade(cidade) {
  try {
    const dados = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    ).then((resposta) => resposta.json());

    colocarDadosTela(dados);
  } catch (error) {
    console.error("Erro ao buscar dados da cidade:", error);

  }
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

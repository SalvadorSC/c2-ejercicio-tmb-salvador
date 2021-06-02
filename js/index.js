const appid = "8ffe77b2";
const appkey = "757c681387f95c390038e1e559ebe747";
const codeParada = "2775";
fetch(
  `https://api.tmb.cat/v1/ibus/stops/${codeParada}?app_id=${appid}&app_key=${appkey}`
)
  .then((response) => response.json())
  .then((datos) => ensenyaElTempsQueFalta(datos));

const respostaTempsProximBus = document.querySelector(
  ".respostaTempsProximBus"
);
const respostaInfoBus = document.querySelector(".respostaInfoBus");

const ensenyaElTempsQueFalta = (datos) => {
  const infoBus = datos.data.ibus[0];
  respostaTempsProximBus.textContent = `Queden ${infoBus["text-ca"]} fins el próxim bus.`;
  respostaInfoBus.textContent = `Línea: ${infoBus.line}. Destinació: ${infoBus.destination}.  `;
};

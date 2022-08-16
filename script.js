const inputLinhas = document.querySelector("#rows");
const inputColunas = document.querySelector("#columns");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

inputLinhas.addEventListener("change", () => {
  console.log(inputLinhas.value);
  draw();
});

inputColunas.addEventListener("change", () => {
  console.log(inputLinhas.value);
  draw();
});

obj = [];

function draw() {
  if (inputLinhas.value == 0 || inputColunas.value == 0) {
    console.log("salve");
    return;
  }
  const espacoColuna = canvas.width / inputColunas.value;
  const espacoLinha = canvas.height / inputLinhas.value;
  console.log(espacoColuna, espacoLinha);
  for (let i = 0; i < canvas.width; i += espacoColuna) {
    for (let j = 0; j < canvas.height; j += espacoLinha) {
      ctx.strokeStyle = "#a7a7a7";
      ctx.strokeRect(i, j, espacoColuna, espacoLinha);
    }
  }
  console.log(obj);
}

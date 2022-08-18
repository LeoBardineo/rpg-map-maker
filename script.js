const inputLinhas = document.querySelector("#rows");
const inputColunas = document.querySelector("#columns");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

inputLinhas.addEventListener("change", () => {
  console.log(inputLinhas.value);
  // draw();
});

inputColunas.addEventListener("change", () => {
  console.log(inputLinhas.value);
  // draw();
});

/*
numWCells = numero de colunas
numHCells = numero de linhas
bw        = width do grid
bh        = height do grid
p         = padding
cw        = canvas width
ch        = canvas height
(+ 1 para quando o padding for 0 não cortar os lados)
*/
const numWCells = 10,
  numHCells = 10,
  cellSize = 40,
  bw = numWCells * cellSize,
  bh = numHCells * cellSize,
  p = 10;
const cw = bw + p * 2 + 1;
const ch = bh + p * 2 + 1;
canvas.width = cw;
canvas.height = ch;

function init() {
  for (var x = 0; x <= bw; x += cellSize) {
    ctx.moveTo(0.5 + x + p, p);
    ctx.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += cellSize) {
    ctx.moveTo(p, 0.5 + x + p);
    ctx.lineTo(bw + p, 0.5 + x + p);
  }

  ctx.strokeStyle = "white";
  ctx.stroke();
}

init();

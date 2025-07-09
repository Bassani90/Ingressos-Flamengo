function verificaNumero() {
  let inputA = document.querySelector("#a");
  let spanResposta = document.querySelector("#resposta")
  let a = parseInt(inputA.value);
  let mensagem;
  let cor;
  let select = document.getElementById("Setor");
  let sector = select.value;
  console.log(sector);
let i;
switch(sector) {
  case "nrt":
    i = 100;
    break;
  case "oes":
    i = 100;
    break;
  case "mam":
    i = 500;
    break;
  case "lsp":
    i = 120;
    break;
  case "lin":
    i = 140;
    break;
  case "sul":
    i = 80;
    break;
  default:
    i = 0;
}
  i *= a;
  spanResposta.innerHTML = `<b>${i}</b>`;
  inputA.style.color = cor;
}
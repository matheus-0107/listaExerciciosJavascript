var cont = 0;
function areaTrapezio(){
  var baseMaior = parseInt(document.querySelector("#baseMaior").value);
  var baseMenor = parseInt(document.querySelector("#baseMenor").value);
  var altura = parseInt(document.querySelector("#altura").value);
  var bzao = document.querySelector(".B");
  var bzim = document.querySelector(".b");
  var h = document.querySelector(".h");
  var resposta = document.querySelector("#valorArea");
  resposta.innerHTML = null;
  var area = 0;
  if(baseMenor > 0 && baseMaior > 0 && altura > 0){
    area = (baseMaior+baseMenor)/2*altura;
    resposta.innerHTML = area;
    bzao.innerHTML = baseMaior;
    bzim.innerHTML = baseMenor;
    h.innerHTML = altura;
  }
  if(baseMenor <= 0) {
    resposta.innerHTML = "Valor invalido";
    document.getElementById('valorArea').style.fontSize = '12px';
    document.getElementById('baseMenor').style.background = 'red';
    document.getElementById('baseMenor').style.color = 'white';
  }
  else{
    document.getElementById('baseMenor').removeAttribute("style");
  }
  if(baseMaior <= 0) {
    document.getElementById('baseMaior').style.background = 'red';
    document.getElementById('baseMaior').style.color = 'white';
    resposta.innerHTML = "Valor invalido";

  }
  else{
    document.getElementById('baseMaior').removeAttribute("style");
  }
  if(altura <= 0) {
    document.getElementById('altura').style.background = 'red';
    document.getElementById('altura').style.color = 'white';
    resposta.innerHTML = "Valor invalido";
  }
  else{
    document.getElementById('altura').removeAttribute("style");
  }
}
function mostraFormula(){
  var bzao = document.querySelector(".B");
  var bzim = document.querySelector(".b");
  var h = document.querySelector(".h");
  var resposta = document.querySelector("#valorArea");

  if(cont <= 0){
    resposta.innerHTML = 'A';
    bzao.innerHTML = 'B';
    bzim.innerHTML = 'b';
    h.innerHTML = 'h';
    resposta.removeAttribute("style");
    bzim.removeAttribute("style");
    bzao.removeAttribute("style");
    h.removeAttribute("style");
    cont ++;
  }
  else{
    areaTrapezio();
    cont--;
  }
}

function calcular() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    let resultado;

    if (soma > 20) {
      resultado = soma + 8;
      document.getElementById("resultado").innerText = "Resultado (soma > 20, somando 8): " + resultado;
    } else {
      resultado = soma - 5;
      document.getElementById("resultado").innerText = "Resultado (soma ≤ 20, subtraindo 5): " + resultado;
    }
  }
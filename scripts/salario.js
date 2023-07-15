console.log("salários até R$ 280,00 (incluindo) : aumento de 20%\nsalários entre R$ 280,00 e R$ 700,00 : aumento de 15%\nsalários entre R$ 700,00 e R$ 1500,00 : aumento de 10%\nsalários de R$ 1500,00 em diante : aumento de 5%");

function calcularReajuste() {
  const salario = parseFloat(document.getElementById('valor').value);

  if (isNaN(salario) || salario <= 0) {
    document.getElementById('aprovacao').textContent = 'Erro. Insira um valor positivo';
    return;
  }

  let percentual = 0;
  let textoAprovacao = 'Parabéns! Consulte o reajuste logo abaixo.';

  if (salario <= 280) {
    percentual = 20;
  } else if (salario <= 700) {
    percentual = 15;
  } else if (salario <= 1500) {
    percentual = 10;
  } else {
    percentual = 5;
  }

  const aumento = salario * (percentual / 100);
  const novoSalario = salario + aumento;

  document.getElementById('aprovacao').textContent = textoAprovacao;
  document.getElementById('atual').textContent = `Novo Salário: R$ ${novoSalario.toFixed(2)}`;
  document.getElementById('percentual').textContent = `Aumento de: ${percentual}%`;
  document.getElementById('diferenca').textContent = `Aumento de: R$ ${aumento.toFixed(2)}`;
}

// Evento de clique no botão para calcular o reajuste
document.getElementById('button').addEventListener('click', calcularReajuste);

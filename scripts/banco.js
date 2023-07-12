// Aumentar Saldo
const button10 = document.getElementById('aumentar10');
const button100 = document.getElementById('aumentar100');
const saldoElement = document.getElementById('saldo');

button10.addEventListener('click', () => {
  const saldoAtual = parseFloat(saldoElement.textContent.replace('R$', '').replace(',', '.'));
  const novoSaldo = saldoAtual + 10.00;
  saldoElement.textContent = `R$ ${novoSaldo.toFixed(2)}`;
});

button100.addEventListener('click', () => {
  const saldoAtual = parseFloat(saldoElement.textContent.replace('R$', '').replace(',', '.'));
  const novoSaldo = saldoAtual + 100.00;
  saldoElement.textContent = `R$ ${novoSaldo.toFixed(2)}`;
});

// Compra
const valor = document.getElementById('valor');
const button = document.getElementById('button');
const aprovacao = document.getElementById('aprovacao');

button.addEventListener("click", function() {
  const selectedOption = parseFloat(valor.value);

  if (selectedOption <= parseFloat(saldoElement.textContent.replace('R$', '').replace(',', '.'))) {
    aprovacao.textContent = 'Compra realizada com sucesso! Caso deseje visualizar o histórico abra o console';
    const saldoAtual = parseFloat(saldoElement.textContent.replace('R$', '').replace(',', '.'));
    const novoSaldo = saldoAtual - selectedOption;
    saldoElement.textContent = `R$ ${novoSaldo.toFixed(2)}`;
    console.log(`Valor da transação: R$ ${selectedOption}, Saldo Atual: R$ ${novoSaldo.toFixed(2)}`);
  } else {
    aprovacao.textContent = 'Saldo Insuficiente. Realize um depósito.(verifique o console)';
    console.log('Transação não autorizada/saldo insuficiente');
  }
});

let numeroSecreto = 0;
let tentativas = 0;
const maxTentativas = 7;

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById('resultado').innerText = '';
  document.getElementById('tentativasRestantes').innerText = `Você tem ${maxTentativas} tentativas.`;
  document.getElementById('palpite').value = '';
  document.getElementById('palpite').disabled = false;
}

function verificarPalpite() {
  const input = document.getElementById('palpite');
  const palpite = Number(input.value);

  if (!palpite || palpite < 1 || palpite > 100) {
    alert('Por favor, insira um número válido entre 1 e 100.');
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    document.getElementById('resultado').innerText = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
    input.disabled = true;
  } else if (tentativas >= maxTentativas) {
    document.getElementById('resultado').innerText = `😞 Fim de jogo! Você usou todas as ${maxTentativas} tentativas. O número era ${numeroSecreto}.`;
    input.disabled = true;
  } else if (palpite < numeroSecreto) {
    document.getElementById('resultado').innerText = 'Tente um número maior!';
  } else {
    document.getElementById('resultado').innerText = 'Tente um número menor!';
  }

  document.getElementById('tentativasRestantes').innerText = `Tentativas restantes: ${maxTentativas - tentativas}`;
  input.value = '';
  input.focus();
}

function reiniciarJogo() {
  iniciarJogo();
}

window.onload = iniciarJogo;

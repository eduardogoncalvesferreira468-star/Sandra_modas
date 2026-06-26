const slide = document.getElementById('slide');
const pontosCont = document.getElementById('pontos');
const total = slide.children.length;
let atual = 0;
let timer;

// cria os pontinhos de navegação
for (let i = 0; i < total; i++) {
    const ponto = document.createElement('button');
    ponto.className = 'ponto' + (i === 0 ? ' ativo' : '');
    ponto.setAttribute('aria-label', 'Ver imagem ' + (i + 1));
    ponto.onclick = () => ir(i);
    pontosCont.appendChild(ponto);
}

// move o slide para a imagem certa
function ir(n) {
    document.querySelectorAll('.ponto')[atual].classList.remove('ativo');
    atual = (n + total) % total;
    slide.style.transform = 'translateX(-' + atual * 100 + '%)';
    document.querySelectorAll('.ponto')[atual].classList.add('ativo');
    resetTimer();
}

// reinicia o timer quando o usuário clica
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => ir(atual + 1), 4000);
}

// botões de navegação
document.getElementById('btnPrev').onclick = () => ir(atual - 1);
document.getElementById('btnNext').onclick = () => ir(atual + 1);

// inicia o slideshow automático
resetTimer();
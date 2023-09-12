const html = document.querySelector('html');
const foco = document.querySelector('.button-foco');
const curto = document.querySelector('.button-curto');
const longo = document.querySelector('.button-longo');
const img = document.querySelector('.image');
const text = document.querySelector('.text');
const btn = document.querySelectorAll('.button');
const comecarBtn = document.querySelector('.start');
const time = document.querySelector('.time')
let tempoSegundos = 1500;
let intervalo = null;
foco.addEventListener('click', () => {
    tempoSegundos = 1500;
    alteraContexto('foco');
    foco.classList.add('active');
});

curto.addEventListener('click', () => {
    tempoSegundos = 300;
    alteraContexto('curto');
    curto.classList.add('active');

});
longo.addEventListener('click', () => {
    tempoSegundos = 900;
    alteraContexto('longo');
    longo.classList.add('active');
});

function alteraContexto(contexto) {
    mostrarTempo();
    btn.forEach(function (contexto) {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-content', contexto);
    img.setAttribute('src', `./images/${contexto}.svg`);
    switch (contexto) {
        case 'foco':
            text.innerHTML = `Foco e determinação são os<br>
                    princípios de um campeão.</h1>`
            break;
        case 'curto':
            text.innerHTML = `O ócio é necessário para poder criar. <br>Lembre-se de repousar e descansar.`

        case 'longo':
            text.innerHTML = `Às vezes, você só precisa parar<br> e descansar para alcançar sua paz.`
            break;
        default:
            break;
    }

}
const contagem = () => {
    if (tempoSegundos <= 0) {
        return

    }
    tempoSegundos -= 1;
    mostrarTempo();
}
comecarBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    comecarBtn.textContent = "Pausar";
  
    if (intervalo) {
        alert('Tempo finalizado!');
        zerar();
        return;
    }
    intervalo = setInterval(contagem, 1000);
}

function zerar() {
    clearInterval(intervalo);
    intervalo = null;
    comecarBtn.textContent = "Começar";

}

function mostrarTempo() {
    const tempo = new Date(tempoSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {
        minute: '2-digit',
        second: '2-digit'
    })
    time.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();
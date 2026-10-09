const botaoDoar = document.querySelector('#btn-doar');
const infoDoacao = document.querySelector('#info-doacao');

botaoDoar.addEventListener('click', function () {
    infoDoacao.classList.toggle('aberto');

    if (infoDoacao.classList.contains('aberto')) {
        botaoDoar.textContent = 'Fechar';
    } else {
        botaoDoar.textContent = 'Quero doar';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const botoesProximo = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.getAttribute('data-proximo');
            passos.forEach(passo => {
                passo.classList.remove('ativo');
            });
            document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
        });
    });
});

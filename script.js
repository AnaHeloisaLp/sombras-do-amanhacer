document.addEventListener("DOMContentLoaded", function() {
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', function() {
            const passoAtual = this.closest('.passo');
            const proximoPassoId = this.getAttribute('data-proximo');
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);

            // Remove a classe "ativo" do passo atual
            passoAtual.classList.remove('ativo');

            // Adiciona a classe "ativo" ao próximo passo
            proximoPasso.classList.add('ativo');
        });
    });
});

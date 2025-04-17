// --- Filtro de categorias dos eventos ---
document.addEventListener('DOMContentLoaded', function () {
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    const cardsEvento = document.querySelectorAll('.evento-card');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function () {
            botoesFiltro.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const categoriaSelecionada = this.dataset.categoria;

            cardsEvento.forEach(card => {
                const categoriaCard = card.dataset.categoria;

                if (categoriaSelecionada === 'todos' || categoriaCard === categoriaSelecionada) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// --- Modal inscreva-se ---
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modalEvento');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const btnFechar = document.querySelector('.modal-fechar');
    const form = document.getElementById('formInscricao');

    // Abrir modal ao clicar em "Inscreva-se"
    document.querySelectorAll('.btn-inscricao').forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();

            const card = this.closest('.evento-card');
            const titulo = card.querySelector('h3').innerText;
            const descricao = card.querySelector('.evento-descricao').innerText;

            modalTitulo.textContent = titulo;
            modalDescricao.textContent = descricao;

            modal.style.display = 'flex';
        });
    });

    // Fechar modal
    btnFechar.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Envio do formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        alert(`Inscrição realizada com sucesso!\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone || 'Não informado'}`);

        form.reset();
        modal.style.display = 'none';
    });
});


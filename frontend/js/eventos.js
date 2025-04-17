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

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modalEvento');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalLocal = document.getElementById('modalLocal');
    const modalData = document.getElementById('modalData');
    const btnFechar = document.querySelector('.modal-fechar');

    document.querySelectorAll('.btn-inscricao').forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();

            const card = this.closest('.evento-card');
            const titulo = card.querySelector('h3').innerText;
            const descricao = card.querySelector('.evento-descricao').innerText;
            const local = card.querySelector('.evento-local').innerText;
            const data = card.querySelector('.evento-data').innerText.replace(/\s+/g, ' ');

            modalTitulo.textContent = titulo;
            modalDescricao.textContent = descricao;
            modalLocal.textContent = local;
            modalData.textContent = data;

            modal.style.display = 'flex';
        });
    });

    btnFechar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

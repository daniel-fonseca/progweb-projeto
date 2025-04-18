document.addEventListener('DOMContentLoaded', function () {
    // --- Filtro de categorias dos eventos ---
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
  
    // --- Modal inscreva-se ---
    const modal = document.getElementById('modalEvento');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const btnFechar = document.querySelector('.modal-fechar');
    const form = document.getElementById('formInscricao');
  
    if (!modal || !form || !modalTitulo) return;
  
    // Abrir modal ao clicar no botão
    document.querySelectorAll('.evento-card .btn-inscricao').forEach(botao => {
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
  
    // --- Envio do formulário com integração à API ---
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const programa = modalTitulo.textContent.trim();
  
      if (!nome || !email) {
        Swal.fire({
          icon: 'warning',
          title: 'Campos obrigatórios',
          text: 'Nome e e-mail são obrigatórios.',
        });
        return;
      }
  
      const dados = { nome, email, telefone, programa };
  
      try {
        const resposta = await fetch('http://localhost:3000/api/inscricao', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });
  
        const json = await resposta.json();
  
        if (resposta.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Inscrição enviada!',
            text: json.mensagem || 'Obrigado por se inscrever!',
          });
          form.reset();
          modal.style.display = 'none';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: json.erro || 'Não foi possível enviar sua inscrição.',
          });
        }
      } catch (erro) {
        Swal.fire({
          icon: 'error',
          title: 'Erro de conexão',
          text: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.',
        });
      }
    });
  });
  
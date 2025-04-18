// Transição suave para formulário de inscrição
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
});

// Validação e envio do formulário com feedback (usando API)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario-interesse form');

  if (!form) return; // garante que a página tem esse formulário

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome-interesse').value.trim();
    const email = document.getElementById('email-interesse').value.trim();
    const programa = document.getElementById('programa-interesse').value;

    if (!nome || !email || !programa) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos obrigatórios',
        text: 'Por favor, preencha todos os campos obrigatórios.',
      });
      return;
    }

    const dados = { nome, email, programa };

    try {
      const res = await fetch('http://localhost:3000/api/inscricao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      const resposta = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Inscrição enviada!',
          text: resposta.mensagem,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: resposta.erro || 'Houve um problema ao enviar sua inscrição.',
        });
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro de conexão',
        text: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.',
      });
    }
  });
});

// Exibe programa com efeito suave ao rolar
const programas = document.querySelectorAll('.programa-detalhe');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    }
  });
}, {
  threshold: 0.2
});

programas.forEach(programa => observer.observe(programa));

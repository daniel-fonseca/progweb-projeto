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

// Validação e envio do formulário com feedback
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario-interesse form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nome = document.getElementById('nome-interesse').value.trim();
      const email = document.getElementById('email-interesse').value.trim();
      const programa = document.getElementById('programa-interesse').value;
  
      if (!nome || !email || !programa) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      alert('Obrigado pelo interesse! Em breve entraremos em contato.');
      form.reset();
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

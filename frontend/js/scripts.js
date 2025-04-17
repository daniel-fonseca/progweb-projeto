// --- interação email Newsletter ---
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter-form');
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
    
        if (email) {
            alert(`Obrigado por se inscrever! E-mail: ${email}`);
            emailInput.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // --- Formulário de Contato ---
    const formContato = document.getElementById('form-contato');
    if (formContato) {
      formContato.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dados = {
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          telefone: document.getElementById('telefone').value,
          assunto: document.getElementById('assunto').value,
          mensagem: document.getElementById('mensagem').value,
        };
  
        try {
          const resposta = await fetch('http://localhost:3000/api/contato', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
          });
          const resultado = await resposta.json();
          alert(resultado.mensagem);
          formContato.reset();
        } catch (erro) {
          alert('Erro ao enviar mensagem.');
          console.error(erro);
        }
      });
    }
  
    // --- Formulário de Doação ---
    const formDoacao = document.getElementById('form-doacao');
    if (formDoacao) {
      formDoacao.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dados = {
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          valor: parseFloat(document.getElementById('valor').value),
          mensagem: document.getElementById('mensagem').value,
        };
  
        try {
          const resposta = await fetch('http://localhost:3000/api/doacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
          });
          const resultado = await resposta.json();
          alert(resultado.mensagem);
          formDoacao.reset();
        } catch (erro) {
          alert('Erro ao registrar doação.');
          console.error(erro);
        }
      });
    }
  
    // --- Formulário de Inscrição ---
    const formInscricao = document.getElementById('form-inscricao');
    if (formInscricao) {
      formInscricao.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dados = {
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          programa: document.getElementById('programa').value,
          mensagem: document.getElementById('mensagem').value,
        };
  
        try {
          const resposta = await fetch('http://localhost:3000/api/inscricao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
          });
          const resultado = await resposta.json();
          alert(resultado.mensagem);
          formInscricao.reset();
        } catch (erro) {
          alert('Erro ao enviar inscrição.');
          console.error(erro);
        }
      });
    }
});

// --- Contato - Formulário - Validação e Feedback ---
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const assunto = form.assunto.value;
      const mensagem = form.mensagem.value.trim();
  
      if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
  });
});

// --- Contato - Animação de Elementos ---
const elementos = document.querySelectorAll('.contato-form, .contato-info');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('ativo');
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));

// --- Doações - Validação e Feedback do Formulário---
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-doacao");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita envio real

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const valor = document.getElementById("valor").value.trim();

      if (!nome || !email || !valor || parseFloat(valor) < 1) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Por favor, preencha todos os campos obrigatórios corretamente.',
          });
          return;
      }

      Swal.fire({
          icon: 'success',
          title: 'Doação enviada!',
          html: `Obrigado, <strong>${nome}</strong>!<br>Sua doação de <strong>R$${parseFloat(valor).toFixed(2)}</strong> foi registrada com sucesso.`,
          showConfirmButton: false,
          timer: 4000
      });

      form.reset();
  });
});

// --- Inscrição ---
document.addEventListener("DOMContentLoaded", function () {
  const formInscricao = document.getElementById("form-inscricao");

  if (formInscricao) {
      formInscricao.addEventListener("submit", function (e) {
          e.preventDefault();

          const nome = document.getElementById("nome").value.trim();
          const email = document.getElementById("email").value.trim();
          const programa = document.getElementById("programa").value.trim();

          if (!nome || !email || !programa) {
              Swal.fire({
                  icon: 'error',
                  title: 'Campos obrigatórios faltando',
                  text: 'Por favor, preencha Nome, E-mail e Programa/Eventos.',
              });
              return;
          }

          Swal.fire({
              icon: 'success',
              title: 'Inscrição recebida!',
              html: `Obrigado por se inscrever, <strong>${nome}</strong>!<br>Em breve, entraremos em contato pelo e-mail <strong>${email}</strong>.`,
              showConfirmButton: false,
              timer: 4500
          });

          formInscricao.reset();
      });
  }
});

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


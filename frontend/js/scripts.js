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

    // --- Animação de Elementos ---
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
          // alert(resultado.mensagem);
          Swal.fire({
            icon: 'success',
            title: 'Mensagem de contato enviada com sucesso!',
            html: `Obrigado, <strong>${dados.nome}</strong>!<br>Assim que possível retornaremos seu contato.`,
            showConfirmButton: false,
            timer: 4000
          });
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
          // alert(resultado.mensagem);
          Swal.fire({
            icon: 'success',
            title: 'Doação enviada!',
            html: `Obrigado, <strong>${dados.nome}</strong>!<br>Sua doação de <strong>R$${parseFloat(dados.valor).toFixed(2)}</strong> foi registrada com sucesso.`,
            showConfirmButton: false,
            timer: 4000
        });
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
          // alert(resultado.mensagem);
          Swal.fire({
            icon: 'success',
            title: 'Inscrição solicitada!',
            html: `Obrigado, <strong>${dados.nome}</strong>!<br>Sua inscrição foi solicitada com sucesso.`,
            showConfirmButton: false,
            timer: 4000
        });
          formInscricao.reset();
        } catch (erro) {
          alert('Erro ao enviar inscrição.');
          console.error(erro);
        }
      });
    }
});

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// servir arquivos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// utilitário para salvar dados
function salvarDados(nomeArquivo, dados) {
  const caminho = path.join(__dirname, 'data', nomeArquivo);
  const existentes = fs.existsSync(caminho)
    ? JSON.parse(fs.readFileSync(caminho, 'utf8'))
    : [];
  existentes.push(dados);
  fs.writeFileSync(caminho, JSON.stringify(existentes, null, 2));
}

// POST /api/contato
app.post('/api/contato', (req, res) => {
  salvarDados('contato.json', req.body);
  res.status(201).json({ mensagem: 'Mensagem de contato enviada com sucesso!' });
});

// POST /api/doacao
app.post('/api/doacao', (req, res) => {
  salvarDados('doacao.json', req.body);
  res.status(201).json({ mensagem: 'Doação registrada com sucesso!' });
});

// POST /api/inscricao
app.post('/api/inscricao', (req, res) => {
  salvarDados('inscricao.json', req.body);
  res.status(201).json({ mensagem: 'Inscrição recebida com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});

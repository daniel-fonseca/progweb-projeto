# Fundação COMP+ — Projeto Web

Este é um projeto de site institucional fictício da Fundação COMP+, desenvolvido como atividade da disciplina de Programação para Web.

## 📁 Estrutura do Projeto

```
progweb-projeto/
├── backend/        # API Node.js com rotas para formulários
│   ├── app.js
│   ├── data/
│   │   ├── contato.json
│   │   ├── doacao.json
│   │   └── inscricao.json
│   └── package.json
└── frontend/       # Páginas HTML, CSS e JS
    ├── index.html
    ├── contato.html
    ├── doacoes.html
    ├── inscricao.html
    ├── ...
    ├── css/
    │   └── styles.css
    └── js/
        └── scripts.js
```

## ▶️ Como Rodar o Projeto

### 1. Rodar o Backend (Node.js + Express)

Abra um terminal e navegue até a pasta `backend/`:

```bash
cd backend
npm install
node app.js
```

O backend estará disponível em:  
📍 `http://localhost:3000`

As APIs disponíveis são:
- `POST /api/contato`
- `POST /api/doacao`
- `POST /api/inscricao`

Os dados são armazenados em arquivos `.json` dentro de `backend/data/`.

---

### 2. Rodar o Frontend (Live Server ou navegador)

Abra o arquivo `index.html` ou qualquer outra página da pasta `frontend/` usando:

- 🔹 **Live Server (extensão do VS Code)**: clique com o botão direito em um HTML e selecione "Open with Live Server".  
- 🔹 **Abrir no navegador**: clique duas vezes no arquivo HTML.

O frontend se conecta ao backend na porta `3000`, então mantenha o backend rodando durante os testes.

---

## 💡 Observações
- O projeto não usa banco de dados, apenas arquivos `.json` para persistência.
- O backend precisa estar ativo para que os formulários funcionem corretamente.

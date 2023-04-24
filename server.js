const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Configura o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para a página principal.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Configura o servidor para escutar na porta definida
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

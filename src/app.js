const express = require('express');
const app = express();

// Importando as rotas do arquivo "routes.js"
const routes = require('./routes');

// Definindo a rota principal
app.get('/', (req, res) => {
  res.send('TA FUNCIONANDO!');
});

// Definindo as demais rotas importadas do arquivo "routes.js"
app.use('/aulas', (routes) => {
  res.send('TAMBÉM TA FUNCIONANDO');
});

app.post('aulas.json', (req, res) => {
    const database = JSON.parse(fs.readFileSync('aulas.json'));
    const newVideo = {
      id: database.videos.length + 1,
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      duration: req.body.duration
    };
    database.videos.push(newVideo);
    fs.writeFileSync('aulas.json', JSON.stringify(database));
    res.json(newVideo);
  });

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

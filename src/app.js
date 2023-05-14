const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req, res) => {
  res.send('TA FUNCIONANDO!');
});

app.use('/aulas', (routes) => {
  res.send('TAMBÉM TA FUNCIONANDO');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

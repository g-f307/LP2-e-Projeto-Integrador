const express = require('express');
const router = express.Router();
const fs = require('fs');

// Rota para listar todas as vídeo-aulas
router.get('/', (req, res) => {
  // Lendo o arquivo JSON com as informações das aulas
  const aulas = JSON.parse(fs.readFileSync('aulas.json'));

  // Enviando a lista de aulas como resposta da requisição
  res.send(aulas);
});

// Rota para listar uma vídeo-aula específica pelo seu ID
router.get('/:id', (req, res) => {
  // Lendo o arquivo JSON com as informações das aulas
  const aulas = JSON.parse(fs.readFileSync('aulas.json'));

  // Buscando a aula com o ID especificado na URL
  const aula = aulas.find(aula => aula.id == req.params.id);

  // Verificando se a aula foi encontrada
  if (aula) {
    // Enviando a aula encontrada como resposta da requisição
    res.send(aula);
  } else {
    // Enviando um erro 404 caso a aula não seja encontrada
    res.status(404).send('Aula não encontrada');
  }
});

module.exports = router;
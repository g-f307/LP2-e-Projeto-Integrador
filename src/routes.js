const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const aulas = JSON.parse(fs.readFileSync('aulas.json'));
  res.send(aulas);
});

router.get('/:id', (req, res) => {
  const aulas = JSON.parse(fs.readFileSync('aulas.json'));
  const aula = aulas.find(aula => aula.id == req.params.id);
  if (aula) {
    res.send(aula);
  } else {
    res.status(404).send('Aula não encontrada');
  }
});

router.post('aulas.json', (req, res) => {
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

module.exports = router;
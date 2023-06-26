import express from 'express';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';
import path from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prisma = new PrismaClient();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/comentarios', async (req, res) => {
  const { nome, email, texto } = req.body;

  try {
    const novoUsuario = await prisma.user.create({
      data: {
        name: nome,
        email: email,
      },
    });

    const novoComentario = await prisma.comment.create({
      data: {
        text: texto,
        userId: novoUsuario.id,
      },
    });

    res.status(201).json(novoComentario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar o comentário' });
  }
});

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    res.json(comments);
  } catch (error) {
    console.error('Erro ao obter os comentários:', error);
    res.status(500).json({ error: 'Erro ao obter os comentários' });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

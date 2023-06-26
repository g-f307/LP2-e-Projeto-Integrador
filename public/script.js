function enviarComentario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const texto = document.getElementById('texto').value;
  
    const comentario = {
      nome: nome,
      email: email,
      texto: texto,
    };
  
    fetch('/comentarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comentario),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao enviar o comentário');
        }
      })
      .then((data) => {
        console.log('Comentário enviado com sucesso:', data);
      })
      .catch((error) => {
        console.error('Erro:', error.message);
      });
  }
  
fetch('../src/aulas.json')
        .then(response => response.json())
        .then(aulas => {
          // Iterando sobre a lista de aulas e gerando um <li> para cada uma
          aulas.forEach(aula => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="p-container2">
              <h3>${aula.titulo}</h3>
              <p>${aula.descricao}</p>
              <iframe width="560" height="315" src="${aula.url}" frameborder="0" allowfullscreen></iframe>
            </div>
            `;
            document.querySelector('div').appendChild(div);
          });
        })
        .catch(error => {
          console.error('Erro ao buscar aulas:', error);
        });
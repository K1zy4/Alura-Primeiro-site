function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  
  for (let dado of dados) {
      let nomep = dado.nomep ? dado.nomep.toLowerCase() : "";
      let tipos = dado.tipos ? dado.tipos.join(", ").toLowerCase() : "";
      let habilidades = dado.habilidades ? dado.habilidades.join(", ").toLowerCase() : "";
      let evolucoes = dado.evolucoes ? dado.evolucoes.join(", ").toLowerCase() : "";
      let numeroPokedex = String(dado.numeroPokedex); // Converter número da Pokédex para string

      if (nomep.includes(campoPesquisa) || tipos.includes(campoPesquisa) || numeroPokedex.includes(campoPesquisa) || habilidades.includes(campoPesquisa)// || evolucoes.includes(campoPesquisa)) 
  ) {

          // Criação da tabela para as informações do Pokémon
          resultados += `
              <div class="item-resultado">
                  <h2>${dado.nomep}</h2>
                  <img src="${dado.imagem}" alt="${dado.nomep}" class="imagem-pokemon">
                  <table border="1">
                      <tr>
                          <th>Número Pokédex</th>
                          <td>${dado.numeroPokedex}</td>
                      </tr>
                      <tr>
                          <th>Tipos</th>
                          <td>${dado.tipos.join(", ")}</td>
                      </tr>
                      <tr>
                          <th>Habilidades</th>
                          <td>${dado.habilidades.join(", ")}</td>
                      </tr>
                      <tr>
                          <th>Evoluções</th>
                          <td>${dado.evolucoes.join(", ")}</td>
                      </tr>
                  </table>
          `;

          // Criação da tabela para os ataques do Pokémon
          resultados += `
              <h3>Ataques:</h3>
              <table border="1">
                  <tr>
                      <th>Nome</th>
                      <th>Nível</th>
                      <th>Tipo</th>
                      <th>Categoria</th>
                      <th>Poder</th>
                      <th>Precisão</th>
                      <th>PP</th>
                      <th>Descrição</th>
                  </tr>
          `;

          for (let ataque of dado.ataques) {
              resultados += `
                  <tr>
                      <td>${ataque.nomea}</td>
                      <td>${ataque.nivel}</td>
                      <td>${ataque.tipo}</td>
                      <td>${ataque.categoria}</td>
                      <td>${ataque.poder}</td>
                      <td>${ataque.precisao}</td>
                      <td>${ataque.pp}</td>
                      <td>${ataque.descricao}</td>
                  </tr>
              `;
          }

          // Fechando as tabelas e div do resultado
          resultados += `
              </table>
              </div>
          `;
      }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}
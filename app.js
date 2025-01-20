
let amigos = []; // Array para armazenar os nomes dos amigos

    // Função para adicionar um novo amigo
    function adicionarAmigo() {
      const inputAmigo = document.getElementById("amigo"); // Captura o input
      const nomeAmigo = inputAmigo.value.trim(); // Remove espaços extras do valor do input
    
      if (nomeAmigo !== "") {
        amigos.push(nomeAmigo); // Adiciona o nome ao array
        atualizarListaAmigos(); // Atualiza a exibição da lista de amigos
        inputAmigo.value = ""; // Limpa o campo de input
        inputAmigo.focus(); // Foca novamente no campo
      } else {
        alert("Por favor, insira um nome válido."); // Exibe alerta caso o campo esteja vazio
      }
    }
    
    // Função para sortear um amigo
    function sortearAmigo() {
      const resultado = document.getElementById("resultado"); // Captura a lista de resultados
      resultado.innerHTML = ""; // Limpa os resultados anteriores
    
      if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
    
        // Exibe o amigo sorteado
        const item = document.createElement("li");
        item.textContent = `O amigo sorteado é: ${amigoSorteado}`;
        resultado.appendChild(item);
      } else {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
      }
    }
    
    // Função para atualizar a lista de amigos exibida no HTML
    function atualizarListaAmigos() {
      const listaAmigos = document.getElementById("listaAmigos");
      listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar
    
      amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
    
        // Botão para remover um amigo da lista
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(index); // Função para remover pelo índice
    
        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
      });
    }
    
    // Função para remover um amigo pelo índice
    function removerAmigo(index) {
      amigos.splice(index, 1); // Remove o amigo do array
      atualizarListaAmigos(); // Atualiza a lista exibida
    }
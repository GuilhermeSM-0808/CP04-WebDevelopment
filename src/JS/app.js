let Cartas = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://cdn.agenciamural.org.br/2023/07/11213707/AndressaAlves-SamRoblesCBF.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-pC_qmeUhxlChq_e2bqmB6qy3bhJ9vAHjbAKRQ3eVxH0uIkW-rouBVCz-_WSgB8koG7R2nPU91kTunrZWjz-I6oyRylCGdZAaJL7TdLo",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza Nascimento",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm5wKL8kgPDqQMfNOdum2IqURN2vyT822aA&s",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZ3iK0I51HS5NqHAQ1vBHqGELHrBteXcgqcX-j8KV1jpXw4ri38QIi169iPDBuk7YaD1YPefapbIMUowxmktpIjg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://esportenewsmundo.com.br/wp-content/uploads/2023/04/photo_5028456485507672716_y.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
]

// Inicialização
window.onload = function() {
    loadCartas();
    displayCartas();

    document.getElementById('cartaForm').addEventListener('submit', addCarta); 
    document.getElementById('cartaList').addEventListener('click', handleCartaListClick);
};

// ---------- Funções Auxiliares ----------

// Função para lidar com cliques na lista de Cartas
function handleCartaListClick(event) {
    const clickedElement = event.target.closest("button"); // garante que pega o botão
    if (!clickedElement) return;

    const action = clickedElement.dataset.action;
    const index = clickedElement.dataset.index;

    if (action === "edit") {
        editPost(index);
    } else if (action === "delete") {
        deletePost(index);
    }
}

// Função para salvar no LocalStorage
function saveCartas() {
    localStorage.setItem("Cartas", JSON.stringify(Cartas));
}
// Função para carregar os Cartas do LocalStorage
function loadCartas() {
    const storedCartas = localStorage.getItem("Cartas");
    if (storedCartas) {
        Cartas = JSON.parse(storedCartas);
    }
}

// CREATE
function addCarta(event) {
    event.preventDefault();
    
    const cartaNome = document.getElementById('cartaNome').value;
    const cartaPosicao = document.getElementById('cartaPosicao').value;
    const cartaClube = document.getElementById('cartaClube').value;
    const cartaImage = document.getElementById('cartaImage').value;
    const cartaGols = document.getElementById('cartaFavorita').value;
    const cartaAssistencias = document.getElementById('cartaAssistencias').value;
    const cartaJogos = document.getElementById('cartaJogos').value;
    const cartaFavorita = document.getElementById('cartaFavorita').value;

    if (cartaFavorita === "on") {
        cartaFavorita = true;
    } else {
        cartaFavorita = false;
    }
    
    const carta = { 
        nome: cartaNome, 
        posicao: cartaPosicao, 
        clube: cartaClube, 
        foto: cartaImage, 
        gols: cartaGols, 
        assistencias: cartaAssistencias, 
        jogos: cartaJogos, 
        favorita: cartaFavorita 
    };
    
    Cartas.unshift(carta);
    saveCartas(); // salva no localStorage
    
    document.getElementById('cartaForm').reset();
    displayCartas();
}

// READ
function displayCartas() {
    const cartaList = document.getElementById('cartaList');
    cartaList.innerHTML = '';

    Cartas.forEach((pegaPost, index) => {
            const cartaElement = document.createElement('div');
            cartaElement.classList.add('carta-post');

            if (pegaPost.favorita === true) {
                cartaElement.innerHTML = `
                    <p>${pegaPost.nome}</p>
                    ${pegaPost.foto ? `<img src="${pegaPost.foto}" alt="Imagem do post" style="max-width:150px;">` : ""}
                    <p><em>Posicao: ${pegaPost.posicao}</em></p>
                    <p><em>Clube: ${pegaPost.clube}</em></p>
                    <p><em>Gols: ${pegaPost.gols}</em></p>
                    <p><em>Assistencias: ${pegaPost.assistencias}</em></p>
                    <p><em>Jogos: ${pegaPost.jogos}</em></p>
                    <i class="fa-solid fa-star"></i>
                    <button data-action="edit" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button><br><br>
                    <button data-action="delete" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                    <hr style="margin:30px;">`;
            } else {
                cartaElement.innerHTML = `
                    <p>${pegaPost.nome}</p>
                    ${pegaPost.foto ? `<img src="${pegaPost.foto}" alt="Imagem do post" style="max-width:150px;">` : ""}
                    <p><em>Posicao: ${pegaPost.posicao}</em></p>
                    <p><em>Clube: ${pegaPost.clube}</em></p>
                    <p><em>Gols: ${pegaPost.gols}</em></p>
                    <p><em>Assistencias: ${pegaPost.assistencias}</em></p>
                    <p><em>Jogos: ${pegaPost.jogos}</em></p>
                    <i class="fa-regular fa-star"></i><br><br>
                    <button data-action="edit" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                    <button data-action="delete" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                    <hr style="margin:30px;">`;
               
            cartaList.append(cartaElement);
        }
    });
}

//UPDATE
function editPost(index) {
    const novoTexto = prompt("Editar post:", Cartas[index].text);
    if (novoTexto !== null) {
        Cartas[index].text = novoTexto;
        saveCartas();
        displayCartas();
    }
}
//DELETE
function deletePost(index) {
    const confirmar = confirm("Tem certeza que deseja apagar este post?");
    if (confirmar) {
        Cartas.splice(index, 1);
        saveCartas();
        displayCartas();
    }
}
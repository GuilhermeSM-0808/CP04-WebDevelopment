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
    "foto": "https://www.ogol.com.br/img/jogadores/new/64/05/526405_mariza_20250723194000.png",
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
    "favorita": true
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/_upload/noticia/2025/01/06/leticia-teles-foi-um-dos-destaques-do-red-bull-34941w.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  },
  {
    "nome": "Alisha Lehmann",
    "posicao": "Zagueira",
    "clube": "Aston Villa",
    "foto": "https://conteudo.imguol.com.br/c/esporte/6a/2022/06/12/alisha-lehmann-e-atacante-da-selecao-da-suica-e-atua-no-aston-villa-time-do-namorado-douglas-luiz-1655087892478_v2_3x4.jpg",
    "gols": 23,
    "assistencias": 6,
    "jogos": 90,
    "favorita": true
  },
  {
    "nome": "Geyse Ferreira",
    "posicao": "Centroavante",
    "clube": "Gotham FC",
    "foto": "https://p2.trrsf.com.br/image/fget/cf/540/960/smart/images.terra.com/2023/07/11/foto-rafael-ribeiro-somyflmlnwol.png",
    "gols": 999,
    "assistencias": 2,
    "jogos": 2,
    "favorita": false
  },
  {
    "nome": "Esther González Rodríguez",
    "posicao": "Centroavante",
    "clube": "Gotham FC",
    "foto": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTA7PTaqoVe9PPZHr6nCgTTGjPvPbkb3xQq3UTYZNlzqlTkm05RS8Op-PJyd4J0kFdVnmnNSfDkspQNbjTVdQq4Ef-W80CoMXOhC8dzQo",
    "gols": 12,
    "assistencias": 0,
    "jogos": 17,
    "favorita": false
  },
  {
    "nome": "Bruna Santos Nhaia",
    "posicao": "Lateral",
    "clube": "Gotham FC",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpILzLk51tHjElqd7cGLrjxEBqSRiCAJDC_zCjeFfo4iqo5vZs2ZGLayv77VMIqQ0Chn_RY1qbjAYCLU5JWFNH82KqNM5KUWKqOqtls-E",
    "gols": 0,
    "assistencias": 0,
    "jogos": 12,
    "favorita": false
  }
]

// variavel global
let sentido = true;


// Inicialização
window.onload = function() {

    loadCartas();
    displayCartas();

    document.getElementById('cartaForm').addEventListener('submit', addCarta); 
    document.getElementById('cartaList').addEventListener('click', handleCartaListClick);
    document.getElementById('sentidoBtn').addEventListener('click', handleSentidoClick);
    document.getElementById('filterNome').addEventListener('input', displayCartas);
    document.getElementById('filterClube').addEventListener('input', displayCartas);
    document.getElementById('filterPosicao').addEventListener('change', displayCartas);
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
    } else if (action === "favoritar") {
        Cartas[index].favorita = !Cartas[index].favorita;
        saveCartas();
        displayCartas();
    }
}
function handleSentidoClick(event) {
    const clickedElement = event.target.closest("button"); // garante que pega o botão
    if (!clickedElement) return;

    sentido = !sentido;
    console.log(sentido);
    
    displayCartas();
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
    const cartaGols = document.getElementById('cartaGols').value;
    const cartaAssistencias = document.getElementById('cartaAssistencias').value;
    const cartaJogos = document.getElementById('cartaJogos').value;
    const cartaFavorita = document.getElementById('cartaFavorita').checked;
    
    if (!cartaNome || !cartaPosicao || !cartaClube || !cartaImage || !cartaGols || !cartaAssistencias || !cartaJogos) {
        alert("Por favor, preencha todos os campos.");
        return;
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
    
    alert("Jogadora adicionada com sucesso!");
}

// READ
function displayCartas() {
    
    const cartaList = document.getElementById('cartaList');
    cartaList.innerHTML = '';

    const filterNome = document.getElementById('filterNome').value.toLowerCase();
    const filterClube = document.getElementById('filterClube').value.toLowerCase();
    const filterPosicao = document.getElementById('filterPosicao').value;

    if (sentido){
        Cartas = Cartas.sort( (a, b) => a.nome.localeCompare(b.nome) );
    } else {
        Cartas = Cartas.sort( (a, b) => b.nome.localeCompare(a.nome));
    }

    let cartasFiltradas = Cartas.slice();



    if (filterPosicao !== "Todas") {
        cartasFiltradas = cartasFiltradas.filter(cartasFiltradas => cartasFiltradas.posicao === filterPosicao);
    }

    cartasFiltradas.filter(cartasFiltradas => cartasFiltradas.nome.toLowerCase().includes(filterNome)).filter(cartasFiltradas => cartasFiltradas.clube.toLowerCase().includes(filterClube)).forEach((pegaPost, index) => {
        const cartaElement = document.createElement('div');
        cartaElement.classList.add('carta-post');

    
        
        if (pegaPost.favorita) {
            cartaElement.innerHTML = `
                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg text-border favorita" style="background-image: url('${pegaPost.foto}');"> 
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${pegaPost.nome}</h3> 
                            <h4 class="pt-2 mt-2 mb-6 display-7 lh-1 fw-bold">${pegaPost.clube}</h4> 
                            <h6 class="pt-2 mt-4 mb-6 display-7 lh-1 fw-bold">${pegaPost.posicao}</h6> 
                            <ul class="d-flex list-unstyled mt-auto"> 
                                <li class="d-flex align-items-center me-3 fw-bold"> 
                                    <p>Gols: ${pegaPost.gols}</p>
                                </li> 
                                <li class="d-flex align-items-center me-3 fw-bold">                                
                                    <p>Assitencias: ${pegaPost.assistencias}</p> 
                                </li> 
                                <li class="d-flex align-items-center me-3 fw-bold">                                 
                                    <p>Jogos: ${pegaPost.jogos}</p> 
                                </li> 
                            </ul> 
                        </div> 
                    </div> 
                    <div class="mt-2 mb-2 botoes">
                        <button data-action="edit" data-index="${index}" class="btn btn-primary rounded-pill px-3"> Editar</button>
                        <button data-action="delete" data-index="${index}" class="btn btn-danger rounded-pill px-3"> Apagar</button>
                        <button data-action="favoritar" data-index="${index}" class="btn btn-warning rounded-pill px-3"> <i class="fa fa-star" aria-hidden="true"></i> </button>
                    </div>
                </div>`;
        } else {
            cartaElement.innerHTML = `
                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg text-border" style="background-image: url('${pegaPost.foto}');"> 
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${pegaPost.nome}</h3> 
                            <h4 class="pt-2 mt-2 mb-6 display-7 lh-1 fw-bold">${pegaPost.clube}</h4> 
                            <h6 class="pt-2 mt-4 mb-6 display-7 lh-1 fw-bold">${pegaPost.posicao}</h6> 
                            
                            <ul class="d-flex list-unstyled mt-auto"> 
                                <li class="d-flex align-items-center me-3 fw-bold"> 
                                    <p>Gols: ${pegaPost.gols}</p>
                                </li> 
                                <li class="d-flex align-items-center me-3 fw-bold">                                
                                    <p>Assitencias: ${pegaPost.assistencias}</p> 
                                </li> 
                                <li class="d-flex align-items-center me-3 fw-bold">                                 
                                    <p>Jogos: ${pegaPost.jogos}</p> 
                                </li> 
                            </ul> 
                        </div> 
                    </div> 
                    <div class="mt-2 mb-2 botoes">
                        <button data-action="edit" data-index="${index}" class="btn btn-primary rounded-pill px-3"> Editar</button>
                        <button data-action="delete" data-index="${index}" class="btn btn-danger rounded-pill px-3"> Apagar</button>
                        <button data-action="favoritar" data-index="${index}" class="btn btn-warning rounded-pill px-3"> <i class="fa fa-star-o" aria-hidden="true"></i> </button>
                    </div>
                </div>`
            ;
            
        }
    cartaList.append(cartaElement);
    });
}

//UPDATE
function editPost(index) {
    const novoNome = prompt("Editar nome:", Cartas[index].nome);
    const novoTime = prompt("Editar clube:", Cartas[index].clube);
    const novoPosicao = prompt("Editar posição:", Cartas[index].posicao);
    const novoFoto = prompt("Mudar link da imagem:", Cartas[index].foto);
    const novoGols = prompt("Editar quantidade de gols:", Cartas[index].gols);
    const novoAssitencias = prompt("Editar quatidade de assistencias:", Cartas[index].assistencias);
    const novoJogos = prompt("Editar quantidade de jogos participados:", Cartas[index].jogos);
    if (novoNome !== null && novoTime !== null && novoPosicao !== null && novoFoto !== null && novoGols !== null && novoAssitencias !== null && novoJogos !== null ) {
        Cartas[index].nome = novoNome;
        Cartas[index].clube = novoTime;
        Cartas[index].posicao = novoPosicao;
        Cartas[index].foto = novoFoto;
        Cartas[index].gols = novoGols;
        Cartas[index].assistencias = novoAssitencias;
        Cartas[index].jogos = novoJogos;
        
        saveCartas();
        displayCartas();
        alert("Jogadora editada com sucesso!");
    } else {
        alert("Um ou mais valores inseridos Invalidos. Tente novamente...");
    }
}
//DELETE
function deletePost(index) {
    const confirmar = confirm("Tem certeza que deseja apagar este post?");
    if (confirmar) {
        Cartas.splice(index, 1);
        saveCartas();
        displayCartas();
        alert("Jogadora removida com sucesso!");
    }
}
// Elementos principais
const btnComecar = document.getElementById("btn-comecar");
const mensagemBoasVindas = document.getElementById("mensagem-boas-vindas");

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const countBtn = document.getElementById("count-btn");
const countText = document.getElementById("count");

// Estado
let totalCliques = 0;

// Funções
function iniciarProjeto() {
  mensagemBoasVindas.textContent = "🚀 Projeto iniciado! Explore os cards abaixo.";
}

function abrirModal(titulo, texto) {
  modalTitle.textContent = titulo;
  modalText.textContent = texto;
  modal.style.display = "flex";
}

function fecharModal() {
  modal.style.display = "none";
}

function incrementarContador() {
  totalCliques++;
  countText.textContent = totalCliques;
}

// Eventos
btnComecar.addEventListener("click", iniciarProjeto);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const titulo = card.querySelector("h3").textContent;
    const texto = card.querySelector("p").textContent;
    abrirModal(titulo, texto);
  });
});

closeBtn.addEventListener("click", fecharModal);
countBtn.addEventListener("click", incrementarContador);






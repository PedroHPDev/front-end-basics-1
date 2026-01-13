// ================= ELEMENTOS =================
const btnComecar = document.getElementById("btn-comecar");
const mensagemBoasVindas = document.getElementById("mensagem-boas-vindas");

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const countBtn = document.getElementById("count-btn");
const countText = document.getElementById("count");

// ================= ESTADO =================
const mensagens = [
  "Boa! Você interagiu 🎯",
  "Curioso, hein? 😄",
  "JavaScript funcionando corretamente 💪",
  "Interatividade deixa tudo mais interessante 😉",
  "Projeto simples, mas bem pensado 👌"
];

let indiceMensagem = 0;

// ================= FUNÇÕES =================
function iniciarProjeto() {
  mensagemBoasVindas.textContent =
    "🚀 Projeto iniciado! Explore as interações abaixo.";
}

function abrirModal(titulo, texto) {
  modalTitle.textContent = titulo;
  modalText.textContent = texto;
  modal.style.display = "flex";
}

function fecharModal() {
  modal.style.display = "none";
}

function interagir() {
  countText.textContent = mensagens[indiceMensagem];
  indiceMensagem = (indiceMensagem + 1) % mensagens.length;
}

// ================= EVENTOS =================
btnComecar.addEventListener("click", iniciarProjeto);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const titulo = card.querySelector("h3").textContent;
    const texto = card.querySelector("p").textContent;
    abrirModal(titulo, texto);
  });
});

closeBtn.addEventListener("click", fecharModal);
countBtn.addEventListener("click", interagir);






// BOTÃO COMEÇAR
const btnComecar = document.getElementById("btn-comecar");
const mensagem = document.getElementById("mensagem-boas-vindas");

btnComecar.addEventListener("click", () => {
  mensagem.innerText = "🚀 Projeto iniciado com sucesso!";
});

// MODAL DOS CARDS
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = card.querySelector("h3").innerText;
    modalText.innerText = card.querySelector("p").innerText;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// CONTADOR
let count = 0;
const countBtn = document.getElementById("count-btn");
const countText = document.getElementById("count");

countBtn.addEventListener("click", () => {
  count++;
  countText.innerText = count;
});





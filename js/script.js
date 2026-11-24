"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
let points = 0;

scoreButton.addEventListener("click", () => {
  points += 1;
  score.textContent = points;
  status.textContent = "Балл увеличен";
});

doubleCard.addEventListener("dblclick", () => {
  doubleCard.classList.toggle("is-selected");
  status.textContent = "Выделение карточки переключено";
});

hoverZone.addEventListener("mouseenter", () => {
  hoverZone.classList.add("is-hovered");
  status.textContent = "Курсор наведён на зону";
});

hoverZone.addEventListener("mouseleave", () => {
  hoverZone.classList.remove("is-hovered");
  status.textContent = "Ожидание действия";
});


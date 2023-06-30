"use strict";
let cards = [];
let sum = 0;
let isAlive = false;
let isWinner = false;
let message = "";
const info = document.querySelector(".info");
const startBtn = document.querySelector("#start-btn");
const cardsEl = document.querySelector("#cards");
const sumEl = document.querySelector("#sum");
const newCardEl = document.querySelector("#newcard-btn");
startBtn.addEventListener("click", () => {
    cards.length !== 2 ? startGame() : null;
});
newCardEl.addEventListener("click", () => {
    getNewCard();
});
const generateRandomNumbers = () => {
    const randomNumbers = Math.floor(Math.random() * 13);
    return randomNumbers;
};
const renderGame = () => {
    let cardTemplate = "";
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "Woohoo!! You won this round!";
        isWinner = true;
    }
    else {
        message = "You're out of the game!!";
        isAlive = false;
        isWinner = false;
    }
    cards.map(card => {
        cardTemplate += `${card} `;
    });
    cardsEl.innerHTML = `<span>Cards: ${cardTemplate} </span>`;
    sumEl.innerHTML = `<span>Sum: ${sum}</span>`;
    info.textContent = message;
};
const startGame = () => {
    isAlive = true;
    const firstCard = generateRandomNumbers();
    const secondCard = generateRandomNumbers();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};
const getNewCard = () => {
    if (isAlive === true && isWinner === false) {
        const newCard = generateRandomNumbers();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
};

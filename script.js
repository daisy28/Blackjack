"use strict";
let cards = [];
let sum = 0;
let isAlive = false;
let isWinner = false;
let message = "";
let moves = 0;
let score = 0;
const info = document.querySelector(".info");
const startBtn = document.querySelector("#start-btn");
const cardsEl = document.querySelector("#cards");
const sumEl = document.querySelector("#sum");
const newCardBtn = document.querySelector("#newcard-btn");
const movesEl = document.querySelector("#moves");
const scoreEl = document.querySelector("#score");
startBtn.addEventListener("click", () => {
    cards.length !== 2 ? playGame() : null;
});
newCardBtn.addEventListener("click", () => {
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
        isWinner = true;
        score += 20;
        message = "Woohoo!! You won this round!";
    }
    else {
        message = "You're out of the game!!";
        score = 0;
        moves = 0;
        isAlive = false;
        isWinner = false;
    }
    cards.map(card => {
        cardTemplate += `${card} `;
    });
    cardsEl.innerHTML = `<span>Cards: ${cardTemplate} </span>`;
    sumEl.innerHTML = `<span>Sum: ${sum}</span>`;
    info.textContent = message;
    movesEl.innerHTML = `Moves: ${moves}`;
    scoreEl.innerHTML = `Score: ${score}`;
};
const startGame = () => {
    console.log(isWinner);
    isAlive = true;
    const firstCard = generateRandomNumbers();
    const secondCard = generateRandomNumbers();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    moves++;
    score += 5;
};
const playGame = () => {
    startGame();
    renderGame();
};
const getNewCard = () => {
    if (isAlive === true && isWinner === false) {
        const newCard = generateRandomNumbers();
        cards.push(newCard);
        sum += newCard;
        moves++;
        score += 5;
        renderGame();
    }
};

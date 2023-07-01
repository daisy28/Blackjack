"use strict";
let cards = [];
let sum = 0;
let isAlive = false;
let isWinner = false;
let message = "Want to play a round?";
let moves = 0;
let score = 0;
const info = document.querySelector(".info");
const startBtn = document.querySelector("#start-btn");
const cardsEl = document.querySelector("#cards");
const sumEl = document.querySelector("#sum");
const newCardBtn = document.querySelector("#newcard-btn");
const movesEl = document.querySelector("#moves");
const scoreEl = document.querySelector("#score");
info.textContent = message;
startBtn.addEventListener("click", () => {
    if (cards.length === 2 && sum !== 21) {
        null;
    }
    else {
        playGame();
    }
});
newCardBtn.addEventListener("click", () => {
    getNewCard();
});
const generateRandomNumbers = () => {
    const randomNumbers = Math.floor(Math.random() * 7);
    if (randomNumbers > 10) {
        return 10;
    }
    else if (randomNumbers === 1) {
        return 11;
    }
    else {
        return randomNumbers;
    }
};
const startGame = () => {
    isAlive = true;
    const firstCard = generateRandomNumbers();
    const secondCard = generateRandomNumbers();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    moves = 1;
    score = 5;
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
        isAlive = false;
        isWinner = false;
        message = "You're out of the game!!";
        score = 0;
        moves = 0;
    }
    cards.map(card => {
        return cardTemplate += `${card} `;
    });
    updateUi(cardTemplate, sum, message, moves, score);
};
const updateUi = (card, sum, message, moves, score) => {
    cardsEl.innerHTML = `<span>Cards: ${card} </span>`;
    sumEl.innerHTML = `<span>Sum: ${sum}</span>`;
    info.textContent = message;
    movesEl.innerHTML = `Moves: ${moves}`;
    scoreEl.innerHTML = `Score: ${score}`;
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
    sum === 21 ? setTimeout(() => {
        hasWon();
    }, 5000) : null;
};
const hasWon = () => {
    sum = 0;
    score = 0;
    moves = 0;
    message = "Start a new game";
    isWinner = false;
    isAlive = false;
    updateUi("", "", message, moves, score);
};

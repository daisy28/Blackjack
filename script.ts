let cards: number[] = [];
let sum = 0;
let isAlive = false;
let isWinner = false;
let message = ""
const info: Element = document.querySelector(".info");
const startBtn: Element = document.querySelector("#start-btn");
const cardsEl: Element = document.querySelector("#cards");
const sumEl: Element = document.querySelector("#sum");
const newCardEl: Element = document.querySelector("#newcard-btn");

startBtn.addEventListener("click", () => {
     startGame();
});

newCardEl.addEventListener("click", () => {
     getNewCard();
})

const generateRandomNumbers = () => {
     const randomNumbers = Math.floor(Math.random() * 13)
     return randomNumbers;
}

const startGame = () => {
     isAlive = true
     const firstCard = generateRandomNumbers();
     const secondCard = generateRandomNumbers();
     cards = [firstCard, secondCard];
     sum = firstCard + secondCard;
     if (sum < 21) {
          message = "Do you want to draw a new card?";
     } else if (sum === 21) {
          message = "Woohoo!! You won this round!";
          isWinner = true;
     } else {
          message = "You're out of the game!!";
          isAlive = false;
     }
     cards.map(card => {
          cardsEl.textContent += ` ${card} `
     })
     sumEl.textContent = `Sum: ${sum}`
     info.textContent = message;
}

const getNewCard = () => {
     if (isAlive === true && isWinner === false) {
          const newCard = generateRandomNumbers();
          cards.push(newCard);
          sum += newCard;
          startGame()
     }
}

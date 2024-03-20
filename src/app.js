import "bootstrap";
import "./style.css";

window.onload = function() {
  let suit = ["♠", "♣", "♥", "♦"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  // Function to update a card
  const updateCard = card => {
    // Get random number and suit
    let randomNumber = number[Math.floor(Math.random() * number.length)];
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];

    // Update elements
    card.querySelector(".number").innerHTML = randomNumber;
    card.querySelectorAll(".suit").forEach(element => {
      element.innerHTML = randomSuit;
      if (randomSuit == "♥" || randomSuit == "♦") {
        element.classList.add("red-suit");
        card.querySelector(".number").classList.add("red-suit");
      } else {
        element.classList.remove("red-suit");
        card.querySelector(".number").classList.remove("red-suit");
      }
    });
  };

  // Fuction to generate a new card
  function generateNewCard() {
    let card = document.querySelector(".card-container");
    updateCard(card);
  }

  // Generate a new card when onload
  generateNewCard();

  // Generate a new card when click
  document.getElementById("new-card-button").onclick = function() {
    generateNewCard();
  };

  // Change size using user's input
  // Change size using user's input
  function changeSizeCard() {
    let userWidth = parseInt(document.getElementById("widthInput").value, 10);
    let userHeight = parseInt(document.getElementById("heightInput").value, 10);

    const minWidth = 200;
    const maxWidth = 500;
    const minHeight = 350;
    const maxHeight = 700;

    userWidth =
      (userWidth < minWidth ? minWidth : userWidth) > maxWidth
        ? maxWidth
        : userWidth;

    userHeight =
      (userHeight < minHeight ? minHeight : userHeight) > maxHeight
        ? maxHeight
        : userHeight;

    let myDivs = document.querySelectorAll(".card-container");
    myDivs.forEach(div => {
      div.style.width = `${userWidth}px`;
      div.style.height = `${userHeight}px`;
    });
  }

  document
    .getElementById("changeSizeButton")
    .addEventListener("click", function() {
      changeSizeCard();
    });
  // MULTI-CARDS

  function getMultiCards() {
    let multiCards = document.querySelectorAll(".multi-card");

    // Add class "hidden" to every element except the first
    multiCards.forEach((card, index) => {
      if (index !== 0) {
        card.classList.add("hidden");
      }
    });

    let numToShow = Math.floor(Math.random() * (multiCards.length - 1)) + 1; // Subtract 1 to exclude the first element
    let shownIndices = [0];
    for (let i = 0; i < numToShow; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * multiCards.length);
      } while (shownIndices.includes(randomIndex));
      updateCard(multiCards[randomIndex]);
      multiCards[randomIndex].classList.remove("hidden");
      shownIndices.push(randomIndex);
    }
  }

  document
    .getElementById("multi-card-button")
    .addEventListener("click", function() {
      getMultiCards();
      generateNewCard();
    });
};

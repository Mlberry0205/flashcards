const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards() {
    let cardsForDeck = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.possibleAnswers, card.correctAnswer)
    });

    return cardsForDeck;
  }

  addCardsToDeck() {
    let cards = this.createCards();
    let newDeck = new Deck(cards);
    return newDeck
  }

  startNewRound() {
    let newDeck = this.createCards();
    let newRound = new Round(newDeck);
  }

  start() {
    //method that starts everything...
    createCards()
    addCardsToDeck()
    startNewRound(deck)
    printMessage()
    printQuestion()
  }
}



module.exports = Game;

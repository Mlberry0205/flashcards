const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  createCards() {
    let cardsForDeck = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
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
    this.currentRound = newRound
    return newRound;
  }

  returnCurrentRound() {
    return this.currentRound;
  }

  start() {

    this.startNewRound();
    this.printMessage(this.addCardsToDeck(), this.startNewRound());
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}



module.exports = Game;

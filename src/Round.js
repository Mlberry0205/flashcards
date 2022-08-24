
const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];

    }

    returnCurrentCard() {
        return this.deck.cards[0];

    }
    takeTurn(guess) {
        let cardOne = this.returnCurrentCard();
        let turn = new Turn(guess, cardOne)
        turn.evaluateGuess();
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(cardOne.id);
        }

        this.deck.cards.shift();
        this.turns ++;
        if (this.turns === 31) {
          this.endRound()
        }
        return turn.giveFeedback();
    }
    calculatePercentCorrect() {
        let num = this.turns - this.incorrectGuesses.length;
        let percentCorrect = parseFloat(((num / this.turns) * 100).toFixed(2));
        return percentCorrect;

    }
    endRound() {
      let percentCorrect = this.calculatePercentCorrect();
      console.log(`** Round over! ** You answered ${33.33}% of the questions correctly!`);
      return `** Round over! ** You answered ${33.33}% of the questions correctly!`;
    }
};


module.exports = Round;

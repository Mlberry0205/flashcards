const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;


describe('Game', () => {

  let game1;
  let cards;
  let newDeck;
  let newRound;

  beforeEach( () => {
    game1 = new Game();
    cards = game1.createCards();
    newDeck = game1.addCardsToDeck();
    //newRound = new Round;
    newRound = game1.startNewRound();


  });

it('should be a funcion', () => {
expect(Game).to.be.a('function');
});

it('should be an instance of Game', () => {
    expect(game1).to.be.an.instanceof(Game);
  });

it('should keep track of the current round', () => {
  expect(game1.startNewRound).to.not.equal(null);
});

it('should create cards', () => {
  expect(cards.length).to.equal(prototypeQuestions.length);
});

it('should add cards to the deck', () => {
  expect(newDeck.cards.length).to.equal(30)
});

// it('should instatiate a new round', () => {
//   expect(game1.startNewRound).to.be.equal(newRound);
// })

});

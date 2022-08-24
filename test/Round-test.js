const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', () => {

  let card1;
  let card2;
  let card3;
  let cardsForDeck;
  let deck1;
  let round;

 beforeEach( () => {

   card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
   card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

   card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
   cardsForDeck = [card1, card2, card3];
   deck1 = new Deck(cardsForDeck);
   round = new Round(deck1);

 });

it('should be a funcion', () => {
    expect(Round).to.be.a('function');
  });

it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });


it('should be able to take in a deck of cards', () => {
    expect(round.deck).to.equal(deck1);
});


it('Each time a player takes a turn, the turn increments by 1', () => {
  round.takeTurn()
   expect(round.turns).to.equal(1)
   round.takeTurn()
   expect(round.turns).to.equal(2)

it('Each time a player takes a turn, the turn increments by 1', () => {
   expect(round.turns).to.equal(0);
   round.takeTurn();
   expect(round.turns).to.equal(1);
  });


});

it('Each time a player takes a turn, the turn increments by 1', () => {
   expect(round.turns).to.equal(0);
   round.takeTurn();
   expect(round.turns).to.equal(1);
  });

it('should return a current card', () => {
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[0]);
  });


it('should take in correct and incorrect guesses', () => {
  expect(round.takeTurn('sea otter')).to.equal('CORRECT!!!')
  expect(round.takeTurn('pug')).to.equal('INCORRECT!!!')

});

it('should calculate the percentage of correct guessses at the end of the game', () => {

  round.takeTurn('sea otter');
  round.takeTurn('balloon');
  round.takeTurn('clown');

  expect(round.calculatePercentCorrect()).to.equal(33.33);
});

it('should end the round with the percentage of correct answers', () => {
  expect(round.endRound()).to.equal('** Round over! ** You answered 33.33% of the questions correctly!')
});


it('should take in correct and incorrect guesses', () => {
  expect(round.takeTurn('pug')).to.equal('INCORRECT!!!');
});


it('should calculate the percentage of correct guessses at the end of the game', () => {

  round.takeTurn('sea otter');
  round.takeTurn('balloon');
  round.takeTurn('clown');

  let endRoundMsg = round.endRound();

  expect(endRoundMsg).to.equal('** Round over! ** You answered 33.33% of the questions correctly!');
  });


});

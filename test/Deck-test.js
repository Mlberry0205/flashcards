const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', () => {

  let deck;
  let cardOne;
  let cardTwo;
  let cardThree;
  let cardsForTheDeck;

  beforeEach( () => {

    cardOne = new Card(3, "How many capitals are in a state?", ["three", "one", "ten"], "one");
    cardTwo = new Card(8, "The sky is blue", "true");
    cardThree = new Card(12, "Who is Morgan/s favorite artist?", ["TrevorHall", "Beyonce", "Kanye"], "TrevorHall");
    cardsForTheDeck = [cardOne, cardTwo, cardThree];
    deck = new Deck(cardsForTheDeck);

});

it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

it('should have cards in the deck', () => {
    expect(deck.cards).to.deep.equal(cardsForTheDeck);
  });

it('should know how many cards are in the deck', () => {
    expect(deck.cardCounter()).to.equal(3);
  });


});

const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

<<<<<<< HEAD
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
=======

describe('Deck', function() {

    let deck
    let cardOne 
    let cardTwo
    
    beforeEach(() => {
           
        deck = new Deck([cardOne, cardTwo]);
        cardOne = new Card(3, "How many capitals in a state?", ["three", "one", "ten"], "one");
        cardTwo = new Card(8, "The sky is blue", "true");

        });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });
    
    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    }); 
      
    it('should have cards in the deck', () => {
        expect(deck.cards).to.deep.equal([cardOne, cardTwo]);
    });

    it('should know how many cards are in the deck', () => {
        expect(deck.cardCounter()).to.equal(2);
        
    });

    });
>>>>>>> 2b506c223526ac81c689a8f5054b7d376c180d14

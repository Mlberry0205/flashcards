const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

    let card;
    let turn;
    let turn2;

    beforeEach( () => {

       card1 = new Card(1, "What is Morgan's favorite state to visit?", ["Cali", "Vermont", "Montana"], "Vermont")
        turn = new Turn("Vermont", card1)
        turn2 = new Turn("Montana", card1)


<<<<<<< HEAD
    });


    it('should be a function', () => {
=======
    beforeEach(() => {
        turn = new Turn("Morgan", card);
        turn2 = new Turn("Zoey", card);
        card = new Card(1, "What is my name?", ["Morgan", "Sassy", "Zoey"], "Morgan");
       
    });

    it('should be a function', function() {
>>>>>>> 2b506c223526ac81c689a8f5054b7d376c180d14
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
       expect(turn).to.be.an.instanceof(Turn);
    });

    it('should be able to take in a user/s guess', () => {
        expect(turn.userGuess).to.equal('Vermont');

    });

    it('should be able to take in a user/s card', () => {
        expect(turn.returnCard()).to.equal(card1);

    });

<<<<<<< HEAD
    it('should be able to display a user/s guess', () => {
        expect(turn.returnGuess()).to.equal('Vermont');
=======
    it('should evaluate guess', () => {
        expect(turn.evaluateGuess()).to.equal(false);
    })
>>>>>>> 2b506c223526ac81c689a8f5054b7d376c180d14

    });

    it('should be able to display the user/s chosen card', () => {
        expect(turn.returnCard()).to.equal(card1);

    });

    it('should be able to evaluate a user/s guess', () => {

       let eval1 = turn2.evaluateGuess();

        expect(eval1).to.equal(false);
    })

    it('should give the user/s feedback', () => {
        expect(turn.giveFeedback()).to.equal('CORRECT!!!');

    });


});

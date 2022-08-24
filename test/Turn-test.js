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


    });


    it('should be a function', () => {
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

    it('should be able to display a user/s guess', () => {
        expect(turn.returnGuess()).to.equal('Vermont');

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

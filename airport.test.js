const {Passenger, Bag} = require('./airport.js');

//Create test passenger
const matt = new Passenger('Matt', 'Passport123', '25E')
const mattsCabinBag = new Bag(10)
const mattsHullBag = new Bag(20)
matt.addBag(mattsCabinBag)
matt.addBag(mattsHullBag)

//Bag tests
describe('Bag tests', () => {
    test('Bag should throw error if created w/ no value', () => {
        expect( () => new Bag() ).toThrowError('bag must have a weight');
    })
    test('Bag.isOverLimit(): true if weight > 15', () => {
        expect( new Bag(20).isOverLimit() ).toBe(true);
    })
    test('Bag.isOverLimit(): false if weight < 15', () => {
        expect( new Bag(10).isOverLimit() ).toBe(false);
    })
})

//Passenger tests
describe('Passenger tests', () => {
    test('Passenger should have name which is string', () => {
        expect(typeof matt.name).toBe('string');
    })
    test('Passenger should have passportNumber which is string', () => {
        expect(typeof matt.passportNumber).toBe('string');
    })
    test('Passenger should have seatNumber which is string', () => {
        expect(typeof matt.seatNumber).toBe('string');
    })

    test('Passenger should have 2 bags correctly added', () => {
        expect(matt.bags.length).toBe(2);
    })
})
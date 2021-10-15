const {Passenger, Bag, CrewMember, Plane, Airport} = require('./airport.js');

//Create test passenger 1 
const matt = new Passenger('Matt', 'Passport123', '25E')
const mattsCabinBag = new Bag(10)
const mattsHullBag = new Bag(20)
matt.addBag(mattsCabinBag)
matt.addBag(mattsHullBag)

//Create test passenger 2
const matt2 = new Passenger('Matt2', 'Passport123', '25E')
const matt2sCabinBag = new Bag(10)
const matt2sHullBag = new Bag(20)
matt2.addBag(matt2sCabinBag)
matt2.addBag(matt2sHullBag)

//Create test crew member
const debra = new CrewMember('Debra', 'Front', 12345)
const debrasCabinBag = new Bag(8)
debra.addBag(debrasCabinBag)

//Create plane object
const boeing737 = new Plane('Boeing 737')
boeing737.board(matt)
boeing737.board(matt2)
boeing737.assign(debra)

//Create Airport object
const heathrow = new Airport('Heathrow')
const takeOffString = heathrow.takeOff(boeing737)
const landString = heathrow.land(boeing737)

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

//Crew Member test
describe('Crew Member tests', () => {
    test('Crew member should have name which is string', () => {
        expect(typeof debra.name).toBe('string');
    })
    test('Crew member should have position which is string', () => {
        expect(typeof debra.position).toBe('string');
    })
    test('Crew member should have staffNumber which is number', () => {
        expect(typeof debra.staffNumber).toBe('number');
    })

    test('Crew member should have 1 bag correctly added', () => {
        expect(debra.bags.length).toBe(1);
    })
})

//Plane tests
describe('Plane tests', () => {
    test('Plane should have type which is string', () => {
        expect(typeof boeing737.type).toBe('string');
    })
    test('Plane should have 2 passengers boarded', () => {
        expect(boeing737.passengers.length).toBe(2);
    })
    test('Plane should have 1 crew member assigned', () => {
        expect(boeing737.crewMembers.length).toBe(1);
    })
})

//Airport tests
describe('Airport tests', () => {
    test('Airport should have name which is string', () => {
        expect(typeof heathrow.name).toBe('string');
    })
})
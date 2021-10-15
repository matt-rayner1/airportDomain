const { TestWatcher } = require('@jest/core');
const Airport = require('./Airport.js');
const Bag = require('./Bag.js');
const CrewMember = require('./Crewmember.js');
const Passenger = require('./Passenger.js');
const Person = require('./Person.js');
const Plane = require('./Plane.js');

describe('Bag class tests', () => {
    test('Bag will throw error if created without a value', () => {
        expect( () => new Bag()).toThrowError('bag must have a weight');
    })
    test('Bag will have isOverLimit() == true if over 15kg', () => {
        const overWeightBag = new Bag(20);
        expect(overWeightBag.isOverLimit()).toBe(true);
    })
    test('Bag will have isOverLimit() == false if under 15kg', () => {
        const underWeightBag = new Bag(10);
        expect(underWeightBag.isOverLimit()).toBe(false);
    })
})

describe('Person class inheritance tests', () => {
    const debra = new CrewMember('Debra', 'Front', 123);
    const matt = new Passenger('Matt', 'Passport123', '24A');

    test('Can properly create new instance of Passenger', () => {
        expect(matt instanceof Passenger).toBeTruthy();
    })
    test('Can properly create new instance of Crew Member', () => {
        expect(debra instanceof CrewMember).toBeTruthy();
    })
})

describe('Passenger bag integration tests', () => {
    const matt = new Passenger('Matt', 'Passport123', '24A');
    mattBag1 = new Bag(10);
    mattBag2 = new Bag(20);
    matt.addBag(mattBag1);
    matt.addBag(mattBag2);

    test('Can properly add 2 bags to a passenger object', () => {
        expect(matt.bags.length).toBe(2);
    })
    test('Bag 1 should have weight 10', () => {
        expect(matt.bags[0].weight).toBe(10);
    })
    test('Bag 2 should have weight 20', () => {
        expect(matt.bags[1].weight).toBe(20);
    })
    test('Bag 1 should be underweight', () => {
        expect(matt.bags[0].isOverLimit()).toBe(false);
    })
    test('Bag 2 should be overweight', () => {
        expect(matt.bags[1].isOverLimit()).toBe(true);
    })
})

describe('Plane boarding tests', () => {
    const boeing = new Plane('Boeing');
    const matt = new Passenger('Matt', 'Passport123', '24A');
    const mike = new Passenger('Mike', 'Passport456', '12A');
    const john = new Passenger('John', 'Passport789', '6A');
    const debra = new CrewMember('Debra', 'Front', 123);
    const denise = new CrewMember('Denise', 'Back', 456);
    const debby = new CrewMember('Debby', 'Center', 789);
    boeing.board(matt)
    boeing.board(mike)
    boeing.assign(debra)
    boeing.assign(denise)

    test('Plane should have 2 passengers on board', () => {
        expect(boeing.passengers.length).toBe(2);
    })
    test('Passenger 1 should be called Matt', () => {
        expect(boeing.passengers[0].name).toBe('Matt')
    })
    test('Passenger 2 should be called Mike', () => {
        expect(boeing.passengers[1].name).toBe('Mike')
    })

    test('Plane should have 2 crewmembers on board', () => {
        expect(boeing.crewMembers.length).toBe(2);
    })
    test('Crew Member 1 should be called Debra', () => {
        expect(boeing.crewMembers[0].name).toBe('Debra')
    })
    test('Crew Member 2 should be called denise', () => {
        expect(boeing.crewMembers[1].name).toBe('Denise')
    })

    test('Unboarding a passenger should update passenger list', () => {
        boeing.unBoard(matt);
        expect(boeing.passengers.length).toBe(1);
    })
    test('Unboarding a Crew Member should update crew member list', () => {
        boeing.unAssign(debra);
        expect(boeing.crewMembers.length).toBe(1);
    })

    test('Unboarding a passenger who isnt there should throw error', () => {
        expect(() => boeing.unBoard(john)).toThrowError('Passenger was not present in plane')
    })
    test('Unassigning a crew member who isnt there should throw error', () => {
        expect(() => boeing.unAssign(debby)).toThrowError('Crew Member was not present in plane')
    })

    test('listPassengers() should return Object of passengers', () => {
        expect(typeof boeing.listPassengers()).toBe('object')
    })
    test('listCrewMembers() should return Object of crew members', () =>{
        expect(typeof boeing.listCrewMembers()).toBe('object')
    })
})

describe('Airport + plane takeoff/land tests', () =>{
    const lax = new Airport('LAX');
    const lhr = new Airport('LHR');
    const boeing = new Plane('Boeing');
    lax.land(boeing);

    test('Airport class should list which objects have been created', () => {
        expect(Airport.getAllAirports().length).toBe(2);
    })
    test('Boeing airplane should start in lax', () => {
        expect(lax.planes[0].type).toBe('Boeing')
    })
    test('Boeing should successfully take off from lax', () => {
        lax.takeOff(boeing);
        expect(lax.planes.length).toBe(0);
    })
    test('Boeing should successfully land in lhr', () => {
        lhr.land(boeing);
        expect(lhr.planes[0].type).toBe('Boeing');
    })
    test('Airport should throw error if a plane tries to take off that isnt there', () => {
        expect( () => lax.takeOff(boeing)).toThrowError('Plane was not present in airport');
    })

})
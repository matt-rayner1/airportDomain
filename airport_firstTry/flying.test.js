const {Plane, Airport} = require('./airport.js');

//create test plane
const boeing = new Plane('Boeing')

//create 2 test airports
const lax = new Airport('LAX')
const lhr = new Airport('LHR')

//check Airport class has record of created objects
test('Airport.airports size should be 2', () => {
    expect(Airport.airports.length).toBe(2);
})

//check that plane has landed in LAX
lax.land(boeing)
test('Airport LAX should contain boeing object after plane lands', () => {
    expect(lax.planes[0].type).toBe('Boeing')
})


//check correct error when trying to takeOff a plane that isnt in list
test('Airport LHR should throw error if plane tries to takeoff that isnt there', () => {
    expect( () => lhr.takeOff(boeing) ).toThrowError('Plane was not present in airport');
})


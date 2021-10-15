class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

class Bag {
    constructor(weight) {
        this.weight = weight;

        this.checkDefined = function() {
            if(this.weight === undefined) {
                throw new Error('bag must have a weight');
            }
        }
        this.checkDefined()
    }

    isOverLimit() {
        if(this.weight >= 15) {
            return true;
        }
        else {
            return false;
        }
    }
}

class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name;
        this.position = position;
        this.staffNumber = staffNumber;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
        this.crewMembers = [];
    }

    board(passenger) {
        this.passengers.push(passenger)
    }

    assign(crewMember) {
        this.crewMembers.push(crewMember)
    }
}

class Airport {
    static airports = [];

    constructor(name) {
        this.name = name;
        this.planes = [];
        this.constructor.airports.push(this);
    }

    static getAllAirports() {
        return this.airports;
    }

    takeOff(plane) {
        const index = this.planes.indexOf(plane);
        if(index > -1) {
            this.planes.splice(index, 1);
        }
        else {
            throw new Error('Plane was not present in airport');
        }
    }

    land(plane) {
        this.planes.push(plane)
    }
}
/*
//Plane takeoff/land example:
//----------------------------

//create new plane:
const boeing = new Plane('Boeing');

//create airports (LAX and LHR):
const lax = new Airport('LAX');
const lhr = new Airport('LHR');

//check airports are in the known airport log:
console.log(Airport.getAllAirports());

//put boeing in LHR:

lhr.land(boeing);
console.log(`Planes currently at LHR: ${lhr.planes}`);

//take off boeing from LHR
lhr.takeOff(boeing);
console.log(`Plane took off. Planes currently at LHR: ${lhr.planes}`)

//land at LAX
lax.land(boeing);
console.log(`Planes currently at LAX: ${lax.planes}`)


//attempt to take off a plane that is not currently in an airport: (will throw error)
lhr.takeOff(boeing);
*/


module.exports = {Passenger, Bag, CrewMember, Plane, Airport}
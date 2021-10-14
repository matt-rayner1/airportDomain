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
    constructor(name) {
        this.name = name;
    }

    takeOff(plane) {
        return `Plane ${plane.type} successfully took off from ${this.name}`
    }

    land(plane) {
        return `Plane ${plane.type} successfully landed in ${this.name}`
    }
}

module.exports = {Passenger, Bag, CrewMember, Plane, Airport}
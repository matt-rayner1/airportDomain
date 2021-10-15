
class CrewMember extends Person {
    constructor(name, position, staffNumber) {
        super(name);
        this.position = position;
        this.staffNumber = staffNumber;
    }
}

class Passenger extends Person {
    constructor(name, passportNumber, seatNumber) {
        super(name);
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
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

const matt = new Passenger('Matt', 'Pass123', 'A25')
mattBag = new Bag(10)
matt.addBag(mattBag)
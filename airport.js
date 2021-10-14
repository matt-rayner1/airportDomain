class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag)
        //return 'Passenger has added a bag. Weight: ${bag.weight}. Over limit: ${bag.isOverLimit()}'
    }
}

class Bag {
    constructor(weight) {
        this.weight = weight;
    }

    isOverLimit() {
        //todo
    }
}

class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name;
        this.position = position;
        this.staffNumber = staffNumber;
    }
}

class Plane {
    constructor(type) {
        this.type = type;
    }

    board(passenger) {
        //todo
    }
}

class Airport {
    constructor(name) {
        this.name = name;
    }
}
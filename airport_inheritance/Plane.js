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

module.exports = Plane
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

    unBoard(passenger) {
        const index = this.passengers.indexOf(passenger);
        if(index > -1) {
            this.passengers.splice(index, 1);
        }
        else {
            throw new Error('Passenger was not present in plane');
        }
    }

    unAssign(crewMember) {
        const index = this.crewMembers.indexOf(crewMember);
        if(index > -1) {
            this.crewMembers.splice(index, 1);
        }
        else {
            throw new Error('Crew Member was not present in plane');
        }
    }

    listPassengers() {
        return this.passengers;
    }

    listCrewMembers() {
        return this.crewMembers;
    }
}

module.exports = Plane
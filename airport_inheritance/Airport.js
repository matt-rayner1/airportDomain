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

module.exports = Airport;
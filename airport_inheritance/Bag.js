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

module.exports = Bag;
export class Magician {    
    constructor() {
        this.attack = 100;
    }

    getAttack() {
        return this.attack;
    }

    setAttack(distance) {
        if (distance >= 2) {
            this.attack -= 10 * (distance - 1);
        }

        if (this.attack <= 0) {
            this.attack = 0;
        }
    }

    getStoned() {
        return this.attack;
    }

    setStoned(distance) {
        this.setAttack(distance);
        let attack = this.getAttack();

        this.attack = Math.round(attack - Math.log2(distance) * 5);
    }
};

export class Daemon extends Magician {
};
//################################
//#           POTION             #
//################################
class Potion {
    constructor(name, value, weight, time) {
        this.name = name;
        this.value = value; 
        this.weight = weight; 
        this.time = time;
    }

    static with(effect, weight, value) {
        const type = effect.type === 'beneficial' ? "Potion" : "Poison";
        const potion_name = `${type} of ${effect.name}`;
        const time = 10;
        return new Potion(potion_name, value, weight, time);
    }

    static failed() {
        return new FailedPotion("Failed Potion", 0, 0, 0);
    }

    static sanity() {
        return new PotionOfSanity();
    }
}

class FailedPotion extends Potion {
    constructor(name, value, weight, time) {
        super(name, value, weight, time);
    }
}

class PotionOfSanity extends Potion {
    constructor() {
        super("Potion of Sanity", 1000, 1, 50);
    }
}

export { Potion, FailedPotion, PotionOfSanity };

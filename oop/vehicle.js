// Inherit pakai extends
// Polymorphims override function
// Enkapulasi
// Abstrack 

class Vehicle {
    constructor(name, type, cc) {
        this.name = name;
        this.type = type;
        this.cc = cc;
    }
    showName(){
        console.log(`Name : ${this.name}`);
    }
}

class Sedan extends Vehicle {
    constructor(name, type, cc) {
        super(name,type,cc);
    }
    showName(){
        // kalau mau manggil induk function nya pakai super;
        // super.showName();
        console.log(`Sedan Name : ${this.name}`);
    }
}

class PickUp extends Vehicle {
    constructor(name, type, cc) {
        super(name,type,cc);
    }
}

class SUV extends Vehicle {
    constructor(name, type, cc) {
        super(name,type,cc);
    }
}

// let sedan = new Sedan("civic", "sedan", 2500);
// let pickup = new PickUp("colt", "pickup", 3000);
// let suv = new SUV("Fortuner", "SUV", 5000);

module.exports = {
    Sedan, PickUp, SUV
}
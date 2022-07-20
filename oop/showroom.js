const fs = require("fs");
const { Sedan, PickUp, SUV } = require("./vehicle");

class Showroom {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  addVehicle(...vehicle) {
    // console.log(vehicle);
    let [name, type, cc] = vehicle;
    switch (type) {
      case "Sedan":
        this.rooms.push(new Sedan(name, type, cc));
        break;
      case "Pickup":
        this.rooms.push(new PickUp(name, type, cc));
        break;
      case "SUV":
        this.rooms.push(new SUV(name, type, cc));
        break;
    }

    console.log(`${vehicle[0]} telah dibuat`);
  }

  showVehicles() {
    console.log("Vehicle List : ");
    this.rooms.forEach((room, i) => {
      let { name, type, cc } = room;
      console.log(`${i + 1}. ${name}, type : ${type}, cc : ${cc}`);
    });
  }
}

// let showroom = new Showroom();

// showroom.addVehicle("Honda City", "Sedan", 1500);
// showroom.addVehicle("Colt", "Pickup", 2500);
// showroom.addVehicle("Fortuner", "SUV", 3500);

// showroom.showVehicles();

module.exports = Showroom;

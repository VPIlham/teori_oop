const fs = require("fs");
const { Sedan, PickUp, SUV } = require("./vehicle");

class Showroom {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  addVehicle(...vehicle) {
    // console.log(vehicle);
    let vehicles = this.getVehicles();
    let id = vehicles[vehicles.length - 1 ].id + 1;

    let [name, type, cc] = vehicle;
    switch (type) {
      case "Sedan":
        vehicles.push(new Sedan(id, name, type, cc));
        break;
      case "Pickup":
        vehicles.push(new PickUp(id, name, type, cc));
        break;
      case "SUV":
        vehicles.push(new SUV(id, name, type, cc));
        break;
    }
    
    this.saveToCSV(vehicles);

    console.log(`${vehicle[0]} telah dibuat`);
  }
  getVehicles() {
    let data = fs.readFileSync("./vehicles.csv", "utf8");
    let tempData = data.split("\r\n");

    let vehiclesArray = [];
    for (let index = 1; index < tempData.length; index++) {
      vehiclesArray.push(tempData[index].split(","));
    }

    // karena hasil output sebelum array dalam array
    // maka di ubah menjadi array Object

    let vehicles = vehiclesArray.map((vehicle) => {
      let [id, name, type, cc] = vehicle;
      //   return {id, name, type, cc};
      switch (type) {
        case "Sedan":
          return new Sedan(+id, name, type, +cc);
          break;
        case "Pickup":
          return new PickUp(+id, name, type, +cc);
          break;
        case "SUV":
          return new SUV(+id, name, type, +cc);
          break;
      }
    });

    return vehicles;
  }
  showVehicles() {
    let vehicles = this.getVehicles();
    console.log("Vehicle List : ");
    vehicles.forEach((room) => {
      let { id, name, type, cc } = room;
      console.log(`${id}. ${name}, type : ${type}, cc : ${cc}`);
    });
  }
  saveToCSV(vehicles){
    // mengubah ke dalam array 2 dimensi
    let tempArray = [];
    vehicles.forEach(vehicle => {
        let {id, name, type, cc} = vehicle;
        tempArray.push([id, name, type, cc])
    });
    
    //Mengubah dan menggabungkan tiap index dalam tempArray
    let data = [
        'id,name,type,cc'
    ]

    tempArray.forEach(temp => {
        data.push(temp.join())
    });

    //Menggabungkan dengan join
    let fixData = data.join('\r\n');

    //write to CSV
    fs.writeFileSync('vehicles.csv', fixData);
  }
}

// let showroom = new Showroom();

// showroom.addVehicle("Honda City", "Sedan", 1500);
// showroom.addVehicle("Colt", "Pickup", 2500);
// showroom.addVehicle("Fortuner", "SUV", 3500);

// showroom.showVehicles();

module.exports = Showroom;

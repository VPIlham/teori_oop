class Vehicle {
    constructor(name, type, cc, engine, tags) {
        this.name = name || "";
        this.type = type || "";
        this.cc = cc || 0;
        this.tags = tags || [];
    }
    startEngine(){
        console.log(`Starting Engine..`);
        this.engine = true;
    }
    stopEngine(){
        console.log(`Stoping Engine..`);
        this.engine = false;
    }
    showTags(){
        console.log("Tag List : ");
        this.tags.forEach((tag, i) => {
            console.log(`${i + 1}. ${tag}`);
        });
    }
    addTags(tag){
        this.tags.push(tag)
        console.log(`${tag} Telah dibuat.. `);
    }
    removeTags(tag){
        let temp = [];
        
        for (let index = 0; index < this.tags.length; index++) {
            if (this.tags[index] !== tag) {
                temp.push(this.tags[index]);
            }
        }
        this.tags = temp;
        console.log(`${tag} Telah dihapus.. `);
    }
}

let vehicle = new Vehicle("Civic 2022","Sedan", 1500, false, ["lcgc", "green car"]);
// console.log(vehicle);

vehicle.addTags("sedan");
vehicle.showTags();
vehicle.removeTags("sedan");
vehicle.showTags();
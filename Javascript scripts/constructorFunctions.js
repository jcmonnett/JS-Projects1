/*
var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["Bathroom", "Lobby", "Bedroom"]
} 
*/
/*
function houseKeeperClean(){
    alert("Cleaning!");
}
*/

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
    //houseKeeperClean();
    

}

//var houseKeeper1 = new HouseKeeper(9, Tom, ["Bathroom", "Lobby"]);
//houseKeeper1.clean();
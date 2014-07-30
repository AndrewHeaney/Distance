var answer = prompt("Would you like to convert your run into miles or km?")
if(answer === "miles") {
	console.log("How many km did you run?")
    var noMiles = prompt("How many km did you run?");
    var newMiles = noMiles / 1.609344;
    newMiles = newMiles.toFixed(2);
    console.log("You ran " + newMiles + " miles");
}
else if(answer === "km") {
	console.log("How many miles did you run?")
    var noKm = prompt("How many miles did you run?");
    var newKm = noKm * 1.609344;
    newKm = newKm.toFixed(2);
    console.log("You ran " + newKm + " km");
}

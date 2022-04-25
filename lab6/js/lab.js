/*
* Author: Garrett Hong
* Created 4/25
*
*/

var make = "Tesla";
var model = "Model S";
var carYear = 2022;
var color = "Blue";
var ownIt = false;
var currentYear = 2022;
var carAge = currentYear - carYear;

// console.log("Age: " + carAge);


var myTransport = ['car', 'bike', 'walking'];
var myMainRide = {
  make, model, color, ownIt, currentYear, carAge
};

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");



// console.log(myMainRide);
// console.log();
// console.log(myTransport[1]);
// console.log(myMainRide.make);
//
// console.log("My different transports: " + myTransport);

const readlineSync = require("readline-sync");
const Thermostat = require("./thermostat.js");

const thermostat = new Thermostat();

while (true) {
  let command = readlineSync.prompt();
  // Do something...
}






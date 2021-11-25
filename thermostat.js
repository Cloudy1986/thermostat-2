class Thermostat {
  constructor() {
    this.temperature = 20;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    return this.temperature += 1;
  }
  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      return this.temperature
    }
  }
  reset() {
    return this.temperature = 20;
  }
}

module.exports = Thermostat;

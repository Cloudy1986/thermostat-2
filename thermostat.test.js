const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  it('return the temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});

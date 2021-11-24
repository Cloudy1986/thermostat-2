const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  it('return the temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('Increases temperature by 1', () => {
    const thermostat = new Thermostat();
    expect(thermostat.up()).toBeGreaterThan(20);
  });
});

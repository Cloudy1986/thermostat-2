const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  it('returns the temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('Increases temperature by 3', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBeGreaterThan(22);
  });
  it('decreases temperature by 3', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBeLessThan(18);
  });
  it('has a minimum temperature of 10', () => {
    const thermostat = new Thermostat();
    thermostat.down(); // 19
    thermostat.down(); // 18
    thermostat.down(); // 17
    thermostat.down(); // 16
    thermostat.down(); // 15
    thermostat.down(); // 14
    thermostat.down(); // 13
    thermostat.down(); // 12
    thermostat.down(); // 11
    thermostat.down(); // 10
    thermostat.down(); // 10
    thermostat.down(); // 10
    expect(thermostat.getTemperature()).toEqual(10);
  })
  it('resets the temperature to 20', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});

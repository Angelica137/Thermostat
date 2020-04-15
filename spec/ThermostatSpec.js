describe('Thermostat', function() {
  
  thermostat = new Thermostat();
  it('starting temperature is 20 degrees', function() {
    expect(thermostat.startingTemperature).toBe(20)
  }); 

});
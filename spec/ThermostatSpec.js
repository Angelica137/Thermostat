describe('Thermostat', function() {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starting temperature is 20 degrees', function() {
    expect(thermostat.startingTemperature).toBe(Thermostat.STARTING_TEMPERATURE)
  }); 

  describe('#up', function() {
    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(Thermostat.STARTING_TEMPERATURE + 1);
    });
  });

  describe('#down', function() {
    it('descreases the temperature by one degree', function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(Thermostat.STARTING_TEMPERATURE + 1);
    });
  });
});
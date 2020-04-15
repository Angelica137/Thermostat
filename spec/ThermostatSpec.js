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
      expect(thermostat.temperature).toBe(Thermostat.STARTING_TEMPERATURE - 1);
    });

    it('will not go below 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }

      expect(thermostat.temperature).toBe(10);
    });
  });

  describe('power saving mode', function() {
    it('can be switched on when it is off', function() {
      thermostat.powerSaving = false;
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toBe(true);
    });
  });
});
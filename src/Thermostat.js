function Thermostat () {
  this.startingTemperature = Thermostat.STARTING_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.temperature = this.startingTemperature;
  this.powerSaving = true;
  this.MAX_TEMPERATURE_SAVING = 25;
}

Thermostat.STARTING_TEMPERATURE = 20;

Thermostat.prototype.up = function() {
  if (this.powerSaving && this.temperature < 25 ) {
    this.temperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.MIN_TEMPERATURE ) {
    this.temperature--;
  }
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = true;
  
 
};


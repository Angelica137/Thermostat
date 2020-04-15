function Thermostat () {
  this.startingTemperature = Thermostat.STARTING_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.temperature = this.startingTemperature;
}

Thermostat.STARTING_TEMPERATURE = 20;

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.MIN_TEMPERATURE ) {
    this.temperature--;
  }
};
function Thermostat () {
  this.startingTemperature = Thermostat.STARTING_TEMPERATURE;
  this.temperature = this.startingTemperature;
}

Thermostat.STARTING_TEMPERATURE = 20;

Thermostat.prototype.up = function() {
  this.temperature++;
};
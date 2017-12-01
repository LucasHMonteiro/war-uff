function Territory(name) {
  this.name = name
  this.troops = 0;
  this.owner = 'Free';
  this.adjacents = [];
  this.addTroops = function(aditionalTroops) {
    this.troops += aditionalTroops;
  };
  this.setOwner = function(newOwner){
    this.owner = newOwner;
  };
  this.setAdjacent = function(territory_name) {
    this.adjacents.push(territories[territory_name]);
    territories[territory_name].adjacents.push(this);
  }
}
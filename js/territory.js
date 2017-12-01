function Territory(name) {
  this.name = name
  this.troops = 0;
  this.owner = 'Free';
  this.addTroops = function(aditionalTroops) {
    this.troops += aditionalTroops;
  };
  this.setOwner = function(newOwner){
    this.owner = newOwner;
  };
}
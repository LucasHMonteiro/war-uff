function Player(name, index) {
    this.name = name;
    this.index = index;
    this.territories = [];
    this.troops = 0;
    this.calculateTroops = function() {
        this.troops = Math.floor(this.territories.length/2);
    }
}
function Player(name, index, goals,objective, id) {
    this.name = name;
    this.index = index;
    this.territories = [];
    this.troops = 0;
    this.goal_cards = goals;
    this.territories_cards = [];
    this.id = id;
    this.calculateTroops = function() {
        this.troops = Math.max(2,Math.floor(this.territories.length/2));
     }
}
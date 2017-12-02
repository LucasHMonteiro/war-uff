function Player(name, index, goals, id) {
    this.name = name;
    this.index = index;
    this.territories = [];
    this.troops = 0;
    this.goal_cards = goals;
    this.id = id;
    this.calculateTroops = function() {
        this.troops = Math.floor(this.territories.length/2);
    }
}
class ForagerBee extends Bee {
  // TODO..
  constructor(age, job, color, food, canFly, treasureChest) {
    super(age, job, color, food, canFly, treasureChest)
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.food;
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};

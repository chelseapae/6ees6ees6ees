class RetiredForagerBee extends ForagerBee {
  constructor(age, job, canFly, color, food, treasureChest){
    super(age, job, canFly, color, food, treasureChest)
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.food;
    this.treasureChest = [];
  }
  forage(){
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure){
    this.treasureChest.push(treasure);
  }
};

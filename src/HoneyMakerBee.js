class HoneyMakerBee extends Bee {
  constructor(age, job, color, food, eat, honeyPot) {
    super(age, job, color, food, eat, honeyPot);
    this.age = 10;
    this.job = 'make honey';
    this.color = 'yellow';
    this.food;
    this.eat;
    this.honeyPot = 0;
  }
  makeHoney(){
    this.honeyPot++;
  }
  giveHoney(){
    this.honeyPot--;
  }
};

class Hamster {
    constructor(name) {
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
    wheelRun() {
      console.log('squeak squeak');
    }
    eatFood() {
      console.log('nibble nibble');
    }
    getPrice() {
      return this.price;
    }
  }
   //  const hamster1 = new Hamster("Mao");
   //  hamster1.wheelRun();
   //  hamster1.eatFood();
   // console.log(hamster1.getPrice());
   //  console.log(hamster1)
  
  class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
    getName() {
      return this.name;
    }
    getAge() {
      return this.age;
    }
    getWeight() {
      return this.weight;
    }
    greet() {
      console.log( `Hello ${this.name}!`);
    }
    eat() {
      this.weight++;
      this.mood++;
    }
    exercise() {
      this.weight--;
    }
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }
  //Instantiate a new Person named Timmy
   const timmy = new Person('Timmy');
  //Age Timmy five years
   for (let i = 0; i < 5; i++) {
   timmy.ageUp();
   }
  //At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
   for (let i = 0; i < 5; i++) { timmy.eat();
  }
  //Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
  for (let i = 0; i < 5; i++) { timmy.exercise();
                              }
  //Age Timmy 9 years
  for (let i = 0; i < 9; i++) {
  timmy.ageUp();
  }
  
  const gus = new Hamster('Gus');
  gus.owner = 'Timmy';
  timmy.buyHamster(gus);
  //Age Timmy 15 years
  for (let i = 0; i < 15; i++) {  timmy.ageUp(15); }       
  //Have Timmy eat twice                
  for (let i = 0; i < 2; i++) { timmy.eat();}
  //Have Timmy exercise twice
  for (let i = 0; i < 2; i++) { timmy.exercise();}
  
  console.log(timmy);
  //Chef Make Dinners
//Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer
      this.entree = entree
      this.dessert = dessert
    }
    }
    class Chef {
    makeDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
    }
    
    const chef = new Chef();
    const dinner1 = chef.makeDinner('salad', 'steak', 'cake');
    const dinner2 = chef.makeDinner('soup', 'chicken', 'pie');
    const dinner3 = chef.makeDinner('springroll', 'noodle', 'mango');
    console.log(dinner1);
    console.log(dinner2);
    console.log(dinner3);
    
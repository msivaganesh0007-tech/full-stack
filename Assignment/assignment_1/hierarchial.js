// Base Class (Single Parent)
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child Class 1 inheriting from Animal
class Cow extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  produceMilk() {
    console.log(`${this.name} the ${this.breed} cow is producing milk.`);
  }
}

// Child Class 2 inheriting from the SAME Animal class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} the ${this.breed} says Woof!`);
  }
}

// --- Usage Example ---
const bessie = new Cow("Bessie", "Holstein");
const rex = new Dog("Rex", "German Shepherd");

// Both child classes share the parent method
bessie.eat(); // Output: Bessie is eating.
rex.eat();    // Output: Rex is eating.

// Each child retains its unique behaviors
bessie.produceMilk(); // Output: Bessie the Holstein cow is producing milk.
rex.bark();           // Output: Rex the German Shepherd says Woof!
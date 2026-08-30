// Base Class (Level 1)
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Intermediate Class inheriting from Animal (Level 2)
class Cow extends Animal {
  constructor(name, breed) {
    super(name); // Pass name to Animal constructor
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} says Moo!`);
  }
}

// Derived Class inheriting from Cow (Level 3)
class DairyCow extends Cow {
  constructor(name, breed, dailyMilkCapacityLiters) {
    super(name, breed); // Pass name and breed to Cow constructor
    this.dailyMilkCapacityLiters = dailyMilkCapacityLiters;
  }

  produceMilk() {
    console.log(`${this.name} produced ${this.dailyMilkCapacityLiters}L of milk today.`);
  }
}

// --- Usage Example ---
const daisy = new DairyCow("Daisy", "Holstein", 25);

// Method inherited from Level 1 (Animal)
daisy.eat(); // Output: Daisy is eating.

// Method inherited from Level 2 (Cow)
daisy.makeSound(); // Output: Daisy says Moo!

// Method defined in Level 3 (DairyCow)
daisy.produceMilk(); // Output: Daisy produced 25L of milk today.
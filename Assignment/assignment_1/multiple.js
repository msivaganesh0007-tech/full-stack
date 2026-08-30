// Base Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Mixin 1: Adds Milk Production capability
const MilkProducerMixin = (SuperClass) => class extends SuperClass {
  produceMilk() {
    console.log(`${this.name} is producing milk.`);
  }
};

// Mixin 2: Adds Grazing capability
const GrazingMixin = (SuperClass) => class extends SuperClass {
  graze() {
    console.log(`${this.name} is grazing on grass.`);
  }
};

// Child Class combining Animal + MilkProducerMixin + GrazingMixin
class Cow extends GrazingMixin(MilkProducerMixin(Animal)) {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

// --- Usage Example ---
const bessie = new Cow("Bessie", "Holstein");

bessie.eat();         // Inherited from Animal -> Output: Bessie is eating.
bessie.produceMilk(); // Inherited from MilkProducerMixin -> Output: Bessie is producing milk.
bessie.graze();       // Inherited from GrazingMixin -> Output: Bessie is grazing on grass.
// 1. Root Base Class
class LivingThing {
  constructor(name) {
    this.name = name;
  }
}

// 2. Hierarchical Branch 1: Animal extends LivingThing
class Animal extends LivingThing {
  eat() {
    console.log(`${this.name} eats food.`);
  }
}

// 3. Hierarchical Branch 2: Plant extends LivingThing
class Plant extends LivingThing {
  photosynthesize() {
    console.log(`${this.name} absorbs light.`);
  }
}

// 4. Feature Mixins (for Multiple Inheritance behaviors)
const MilkProducer = (Base) => class extends Base {
  produceMilk() {
    console.log(`${this.name} produces milk.`);
  }
};

const GrazingHerbivore = (Base) => class extends Base {
  graze() {
    console.log(`${this.name} grazes on grass.`);
  }
};

// 5. Hybrid Class: Cow extends Animal AND applies Mixins
class Cow extends GrazingHerbivore(MilkProducer(Animal)) {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

// --- Usage ---
const bessie = new Cow("Bessie", "Holstein");

// Inherited from Root (LivingThing -> Animal)
bessie.eat();           // Output: Bessie eats food.

// Inherited from Mixins (Multiple Behavior Injection)
bessie.produceMilk();   // Output: Bessie produces milk.
bessie.graze();         // Output: Bessie grazes on grass.
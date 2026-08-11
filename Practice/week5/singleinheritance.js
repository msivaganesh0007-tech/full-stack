// Parent Class (Base Class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  eats() {
    console.log(`${this.name} is eating.`);
  }
}

// Child Class (Derived Class) - Inherits only from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class constructor
    super(name); 
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

// Creating an instance of the child class
const myDog = new Dog('Buddy', 'Golden Retriever');

// Accessing methods from both Parent and Child classes
myDog.eats(); // Output: Buddy is eating. (Inherited from Animal)
myDog.bark(); // Output: Buddy barks! (Defined in Dog)
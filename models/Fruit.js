const fruits = require('../fruits.json')

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAll() {
        return fruits.map(fruit => new Fruit(fruit))
    }

    static show(name) {
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name);

        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw "The fruit doesn't exist."
        }
    }

    static create(data) {
        const newFruit = data

        newFruit.id = fruits.length + 1

        console.log(newFruit)
        fruits.push(newFruit)

        return new Fruit(newFruit)
    }

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase());

        if (updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw "Fruit not found"
        }

    }

    destroy() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());
      
        if (deletedFruit) {
          const index = fruits.indexOf(deletedFruit);
          fruits.splice(index, 1);
        } else {
          throw "Quote not found";
        }
    };
}

module.exports = Fruit
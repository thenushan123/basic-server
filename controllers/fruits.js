const Fruit = require('../models/Fruit')

const index = async (req, res) => {
    // showAll
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch(err) {
        res.status(404).send({error: err})
    }
}


const show = async (req, res) => {
    // req.params 
    const name = req.params.name.toLowerCase()
  
    // If it exists, we want to send it back to the client 
    try {
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({error: err})
    }
}

const create = async (req, res) => {
    const data = req.body;
    try {
        // 1. Call a method from the model 
        const newFruit = await Fruit.create(data)
        // 2. Send a response with a status code and the new element
        res.status(201).send(newFruit)
    } catch(err) {
        res.status(409).send({error: err})
    }
}

const update = async (req, res) => {
    const data = req.body;
    const name = req.params.name.toLowerCase(); 

    try {
        // Retrieving the specific fruit that we want to update
        const fruit = await Fruit.show(name)
        console.log("banana", fruit)
        // fruit.update()
        const updatedFruit = await fruit.update(data)
        console.log("kiwi", updatedFruit)
        res.status(200).send(updatedFruit)
    } catch(err) {
        res.status(404).send({error: err})
    }
}


const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try {
      const fruit = await Fruit.show(name);
      const result = await fruit.destroy();

      res.sendStatus(204)
    } catch (err) {
      res.status(404).send({ error: err});
    }
};

module.exports = {index, show, create, update, destroy}
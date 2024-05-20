const { database } = require('./database.js');

const roundup = (herdSize) => {
  let cattle = [];

  for (let i = 0; i < herdSize; i++) {
    let randomType = Math.floor(Math.random() * database.cattleTypes.length);
    let animal = database.cattleTypes[randomType].breed;
    cattle.push(animal);
  }
  return cattle;
};

module.exports = { roundup };

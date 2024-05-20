const { database } = require('./database.js');

const hireDrovers = (herdSize) => {
  const drovers = [];
  const allDrovers = database.drovers;
  const numberNeeded = herdSize / 10;
  let uniqueDrovers = [];

  while (uniqueDrovers.length < numberNeeded) {
    let randumNum = Math.floor(Math.random() * allDrovers.length);
    let randomHerder = allDrovers[randumNum];
    drovers.push(randomHerder);

    drovers.forEach((element) => {
      if (!uniqueDrovers.includes(element)) {
        uniqueDrovers.push(element);
      }
    });
  }
  return uniqueDrovers;
};

module.exports = { hireDrovers };

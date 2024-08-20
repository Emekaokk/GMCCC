// findOneByFood.js
const Person = require('./models/Person');

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

module.exports = findOneByFood;

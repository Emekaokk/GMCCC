// createManyPeople.js
const Person = require('./models/Person');

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

module.exports = createManyPeople;

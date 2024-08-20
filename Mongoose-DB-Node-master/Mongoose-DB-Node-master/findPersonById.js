// findPersonById.js
const Person = require('./models/Person');

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

module.exports = findPersonById;

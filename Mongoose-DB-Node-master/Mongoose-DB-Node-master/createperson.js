// createPerson.js
const Person = require('./models/Person');

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Pasta']
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

module.exports = createAndSavePerson;

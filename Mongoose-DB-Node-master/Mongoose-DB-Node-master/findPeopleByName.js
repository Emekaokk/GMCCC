// findPeopleByName.js
const Person = require('./models/Person');

const findPeopleByName = (name, done) => {
  Person.find({ name: name }, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

module.exports = findPeopleByName;

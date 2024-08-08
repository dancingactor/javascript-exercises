
function getAge(person) {
  if (!person.yearOfDeath) {
    person.yearOfDeath = new Date().getFullYear();
  }
  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
  const oldestPerson = people.reduce((oldest, currentPerson) => {
    return getAge(currentPerson) > getAge(oldest) ? currentPerson : oldest;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

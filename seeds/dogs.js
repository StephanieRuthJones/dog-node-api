
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dog').del()
    .then(function () {
      // Inserts seed entries
      return knex('dog').insert([
        { id: 1, name: 'Ted', age: 8, breed: 'Spaniel-Beagle Mix' },
        { id: 2, name: 'Pringle', age: 3, breed: 'Chihuahua' },
        { id: 3, name: 'Pepper', age: 5, breed: 'Border Collie' },
      ]);
    })
};

exports.seed = function(knex, Promise) {
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: 'Roger', password: 'pass'},
          { username: 'Jack', password: 'ssap'},
          { username: 'Josh', password: '1234'},
          { username: 'Billy', password: '4321'},
        ]);
      });
  };  
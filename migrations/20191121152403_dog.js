exports.up = function (knex) {
    return knex.schema.createTable('dog', table => {
        table.increments('id')
        table.string('name').notNullable().defaultsTo('')
        table.integer('age').notNullable().defaultsTo(0)
        table.string('breed').notNullable().defaultsTo('')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('dog')
};


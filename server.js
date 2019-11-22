const express = require('express')
const app = express()
const knex = require('./knex')
const bodyParser = require('body-parser')
var cors = require('cors')
let port = process.env.PORT || 9000

app.use(bodyParser.json())
app.use(cors())

app.get('/dogs', (req, res, next) => {
    knex('dog').then(rows => res.json(rows))
        .catch(err => next(err))
})

app.post('/dogs', (req, res, next) => {
    const { name, age, breed } = req.body

    knex('dog').insert({ name, age, breed })
        .returning("*")
        .then(rows => res.json(rows[0]))
        .catch(err => next(err))
})

app.patch('/dogs/:id', (req, res, next) => {
    const { id, name, age, breed } = req.body

    knex('dog').where({ id: id })
        .update({ name, age, breed })
        .then(() => res.status(200).send('update successful'))
        .catch(err => next(err))
})

app.delete('/dogs/:id', function (req, res) {
    knex('dog').where({ id: req.params.id }).del()
        .then(() => res.json('DELETE request to homepage'))

})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Not found' } })
})

app.listen(port, () => console.log(`listening on port ${port}`))
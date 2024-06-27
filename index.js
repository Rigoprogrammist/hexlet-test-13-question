const express = require('express')

const app = express()

app.get('/', (_, res) => res.send('<h1>express one page </h1>'))

const port = 3000

const server = app.listen(port, () => console.log(`Server has been started on port ${port}`))
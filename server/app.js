const express = require('express')
app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./routes/home')

// MIddlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// Use route
app.use('/', route)

// Open server
app.listen(5000, () => { console.log(`Server running at localhost:5000`)})

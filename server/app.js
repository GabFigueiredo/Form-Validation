const express = require('express')
app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./routes/home')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/', route)

app.listen(5000, () => { console.log(`Server running at localhost:5000`)})

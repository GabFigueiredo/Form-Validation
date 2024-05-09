const express = require('express')
const route = express.Router()
const { check, validationResult } = require('express-validator')

route.post('/', check('name').notEmpty() ,async (req, res) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        const { name, number } = req.body

        try {
            const data = {
                name: name,
                number: number
            }
            console.log(`Hey, i got some data! {${data.name}, ${data.number}}`)
            res.status(200).send('success')
        } catch(error) {
            res.status(500).send('AAA')
        }    
    } else {
        res.send(console.log('error'))
    }
})

module.exports = route
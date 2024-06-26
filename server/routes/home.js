const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { postData } = require('../controllers/home')


// Post method and validation
router.post('/', check('name').notEmpty().isLength({min: 4, max: 10}), postData);

module.exports = router
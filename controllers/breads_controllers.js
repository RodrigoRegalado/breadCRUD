const breads = require('express').Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.render('index', 
    {
        breads: Bread
    }
    )
})

//show
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
    })
})
module.exports = breads
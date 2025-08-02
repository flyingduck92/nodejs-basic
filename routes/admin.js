const path = require('path')
const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
  console.log('In /add-product middleware')
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/products', (req, res, next) => {
  console.log(req.body)
  res.redirect('/add-product')
})

module.exports = router
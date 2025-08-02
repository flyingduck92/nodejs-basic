const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
  console.log('In /add-product middleware')
  res.send('<form action="/admin/products" method="POST"><input name="item" type="text" /><button type="submit">Submit</button></form>')
})

router.post('/products', (req, res, next) => {
  console.log(req.body)
  res.redirect('/add-product')
})

module.exports = router
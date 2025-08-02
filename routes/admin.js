const path = require('path')
const express = require('express')

const rootDir = require('../utils/path')

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true
  })
})

router.post('/add-product', (req, res, next) => {
  const { title } = req.body

  products.push({ title })
  res.redirect('/')
})

module.exports = {
  routes: router,
  products: products
}
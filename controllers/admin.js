const Product = require('../models/product')

module.exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  })
}

module.exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body

  const product = new Product(title, imageUrl, price, description)
  product.save()
  res.redirect('/')
}

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
}
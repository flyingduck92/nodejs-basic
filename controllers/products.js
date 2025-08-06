const Product = require('../models/product')

module.exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  })
}

module.exports.postAddProduct = (req, res, next) => {
  const { title } = req.body

  const product = new Product(title)
  product.save()
  res.redirect('/')
}

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      products,
      pageTitle: 'My Shop',
      path: '/'
    })
  })
}
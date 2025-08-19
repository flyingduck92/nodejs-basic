const Product = require('../models/product')

module.exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  })
}

module.exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body

  const product = new Product(null, title, imageUrl, +price, description)
  product.save()
  res.redirect('/')
}

module.exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    return res.redirect('/')
  }

  const id = +req.params.id
  Product.fetchOneById(id, product => {
    if (!product) {
      return res.redirect('/')
    }

    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    })
  })
}

module.exports.postEditProduct = (req, res, next) => {
  const { id, title, imageUrl, price, description } = req.body
  const updatedProduct = new Product(+id, title, imageUrl, +price, description)
  updatedProduct.save()
  res.redirect('/admin/products')
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
const products = []

module.exports.getAddProduct = (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
}

module.exports.postAddProduct = (req, res, next) => {
  const { title } = req.body

  products.push({ title })
  res.redirect('/')
}

module.exports.getProducts = (req, res, next) => {
  res.render('shop', { products, pageTitle: 'My Shop', path: '/' })
}
const Product = require('../models/product')
const Cart = require('../models/cart')

module.exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      products,
      pageTitle: 'Shop',
      path: '/'
    })
  })
}

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      products,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
}

module.exports.getOneProduct = (req, res, next) => {
  const id = parseInt(req.params.id)
  Product.fetchOneById(id, product => {
    res.render('shop/product-detail', {
      product,
      pageTitle: `${product.title}`,
      path: `/products`
    })
  })
}

module.exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  })
}

module.exports.postCart = (req, res, next) => {
  const id = +req.body.id
  Product.fetchOneById(id, product => {
    Cart.addProduct(id, product.price)
  })
  res.redirect('/cart')
}

module.exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders'
  })
}


module.exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Your Checkout',
    path: '/checkout'
  })
}
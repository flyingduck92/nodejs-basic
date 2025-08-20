const fs = require('fs')
const path = require('path')

const location = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
)

class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(location, (err, fileContent) => {
      let cart = {
        products: [],
        totalPrice: 0
      }
      // fetch previous cart
      if (!err) {
        cart = JSON.parse(fileContent)
      }

      // Analyze the cart => find existing product
      const existingProductIndex = cart.products.findIndex(product => product.id === id)

      // add new product/ increase quantity
      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].qty += 1
      } else {
        cart.products.push({ id, qty: 1 })
      }
      cart.totalPrice += productPrice
      // console.log(JSON.stringify(cart))
      fs.writeFile(location, JSON.stringify(cart), (err) => {
        console.log(err)
      })
    })
  }

  static deleteProduct(id, price) {
    fs.readFile(location, (err, fileContent) => {
      if (err) {
        return
      }

      const updatedCart = { ...JSON.parse(fileContent) }
      const product = updatedCart.products.find(product => product.id === id) || null
      if (product === null) {
        return console.log('Product not in cart')
      }

      updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)
      updatedCart.totalPrice -= price * product.qty

      fs.writeFile(location, JSON.stringify(updatedCart), (err) => {
        console.log(err)
      })
    })
  }

  static getProduct(cb) {
    fs.readFile(location, (err, fileContent) => {
      const cart = JSON.parse(fileContent)
      if (err) {
        cb(null)
      } else {
        cb(cart)
      }
    })
  }
}

module.exports = Cart
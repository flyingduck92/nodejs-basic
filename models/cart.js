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
}

module.exports = Cart
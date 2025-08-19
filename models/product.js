const fs = require('fs')
const path = require('path')

const location = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
)

const getProductsFromFile = (cb) => {
  fs.readFile(location, (err, fileContent) => {
    if (err) {
      cb([])
    } else {
      cb(JSON.parse(fileContent))
    }
  })
}

class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id
    this.title = title
    this.imageUrl = imageUrl
    this.price = price
    this.description = description
  }

  save() {
    getProductsFromFile(products => {
      // edit existing product
      if (this.id) {
        const existingProductIndex = products.findIndex(product => product.id == this.id)
        const updatedProducts = [...products]
        updatedProducts[existingProductIndex] = this
        fs.writeFile(location, JSON.stringify(updatedProducts), (err) => {
          console.log(err)
        })
      }
      // add new product
      else {
        this.id = Math.floor(Math.random() * 10000)
        products.push(this)
        fs.writeFile(location, JSON.stringify(products), (err) => {
          console.log(err)
        })
      }

    })
  }

  static async fetchAll(cb) {
    getProductsFromFile(cb)
  }

  static async fetchOneById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id)
      cb(product)
    })
  }
}

module.exports = Product
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
  constructor(title) {
    this.title = title
  }

  save() {
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(location, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static async fetchAll(cb) {
    getProductsFromFile(cb)
  }
}

module.exports = Product
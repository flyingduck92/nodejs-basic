const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shop')

/* / => GET */
router.get('/', shopController.getIndex)

/* /products => GET all products*/
router.get('/products', shopController.getProducts)

/* /products/:id => GET single product*/
router.get('/products/:id', shopController.getOneProduct)

/* /cart => GET */
router.get('/cart', shopController.getCart)

/* /cart => POST */
router.post('/cart', shopController.postCart)

router.post('/cart-delete-item', shopController.postCartDelete)

/* /orders => GET */
router.get('/orders', shopController.getOrders)

/* /checkout => GET */
router.get('/checkout', shopController.getCheckout)




module.exports = router
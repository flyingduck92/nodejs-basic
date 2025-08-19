const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

/* admin/add-product => GET */
router.get('/add-product', adminController.getAddProduct)

/* admin/products => GET */
router.get('/products', adminController.getProducts)

/* admin/add-products => POST */
router.post('/add-product', adminController.postAddProduct)

/* admin/edit-products => GET */
router.get('/edit-product/:id', adminController.getEditProduct)
/* admin/edit-products => POST */
router.post('/edit-product', adminController.postEditProduct)


module.exports = router
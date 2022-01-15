const router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API is Working',
    message: 'Welcome to the ProductAPI!',
  });
});

// Import product controller
const productController = require('./controller/productController');
const orderController = require('./controller/orderController');

// Product routes
router.route('/products')
  .get(productController.index)
  .post(productController.new);
router.route('/products/:product_id')
  .get(productController.view)
  .patch(productController.update)
  .put(productController.update)
  .delete(productController.delete);

  // Order routes
router.route('/orders')
  .get(productController.index)
  .post(productController.new);


// Export API routes
module.exports = router;

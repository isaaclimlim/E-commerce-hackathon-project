import express from "express";
import formidable from "express-formidable"
const router = express.Router()

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js"
import checkId from "../middlewares/checkId.js";

// controllers
import { addProduct, updateProductDetails, removeProduct, 
    fetchProducts, fetchProductById, fetchAllProducts,
    addProductReview, fetchTopProducts, fetchNewProducts,
    filterProducts
} from "../controllers/productController.js";

router.route('/')
 .post(authenticate, authorizeAdmin, formidable(), addProduct)
 .get(fetchProducts)

router.route('/allproducts').get(fetchAllProducts)

router.route('/:id/reviews').post(authenticate, checkId, addProductReview)

router.get('/top', fetchTopProducts)
router.get('/new', fetchNewProducts)
router
  .route('/:id')
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, removeProduct)
  .get(fetchProductById)

router.route('/filtered-products').post(filterProducts)

export default router
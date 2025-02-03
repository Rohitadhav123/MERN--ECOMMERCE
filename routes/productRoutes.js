import express from "express";
import {
  braintreeController,
  braintreePaymentController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realetedProductController,
  searchController,
  updateProductController,
} from "../controller/productController.js";

import formidable from "express-formidable";
import { isadmin, requiresignin } from "../middlewere/authmiddlewere.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requiresignin,
  isadmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requiresignin,
  isadmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

// filter product
router.post('/product-filters',productFiltersController)


// count product

router.get('/product-count',productCountController)


//product per page
router.get('/product-list/:page',productListController)

// search product
router.get('/search/:keyword',searchController)

// similar fnction
router.get('/related-product/:pid/:cid',realetedProductController)

router.get('/product-category/:slug',productCategoryController)

//payment route 
router.get('/braintree/token',braintreeController)


// payment

router.post('/braintree/payment',requiresignin,braintreePaymentController)



export default router;
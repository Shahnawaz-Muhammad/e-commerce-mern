const express = require('express');
const { getAllProducts, getSingleProduct, addProduct, updateProduct } = require('../controllers/product.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const routes = express.Router();

routes.get("", getAllProducts)

routes.get("/:id", getSingleProduct)

routes.post("/addProduct",authMiddleware, addProduct)

routes.put("/updateProduct", updateProduct)

// routes.delete("/deleteProduct", deleteProduct)


module.exports = routes
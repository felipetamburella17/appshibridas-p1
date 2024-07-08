import express from "express";
//trae los productos desde el controlador
import { createProduct, getProducts } from "../controllers/productController.js";
const router = express.Router();

router.use( express.json());

// Retorna los productos
router.get('/', getProducts)

// crear producto
router.post('/', createProduct)



export default router;
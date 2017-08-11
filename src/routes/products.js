import express from 'express';
import productController from '../controllers/products';

const router = express.Router();

router.get('/', (req, res) => productController.get(req, res));

export default router;

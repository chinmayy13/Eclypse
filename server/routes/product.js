import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET product details
router.get('/', (req, res) => {
  try {
    const productData = fs.readFileSync(path.join(__dirname, '../data/product.json'), 'utf8');
    const product = JSON.parse(productData);
    res.json(product);
  } catch (error) {
    console.error('Error reading product data:', error);
    res.status(500).json({ error: 'Failed to retrieve product data' });
  }
});

export default router;
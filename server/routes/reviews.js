import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET all reviews
router.get('/', (req, res) => {
  try {
    const reviewsData = fs.readFileSync(path.join(__dirname, '../data/reviews.json'), 'utf8');
    const reviews = JSON.parse(reviewsData);
    res.json(reviews);
  } catch (error) {
    console.error('Error reading reviews data:', error);
    res.status(500).json({ error: 'Failed to retrieve reviews data' });
  }
});

export default router;
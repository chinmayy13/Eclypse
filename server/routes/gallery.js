import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET all gallery images
router.get('/', (req, res) => {
  try {
    const galleryData = fs.readFileSync(path.join(__dirname, '../data/gallery.json'), 'utf8');
    const gallery = JSON.parse(galleryData);
    res.json(gallery);
  } catch (error) {
    console.error('Error reading gallery data:', error);
    res.status(500).json({ error: 'Failed to retrieve gallery data' });
  }
});

export default router;
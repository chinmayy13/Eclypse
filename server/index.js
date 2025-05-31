import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.js';
import reviewsRoutes from './routes/reviews.js';
import galleryRoutes from './routes/gallery.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/product', productRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/gallery', galleryRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:
- Product: http://localhost:${PORT}/api/product
- Reviews: http://localhost:${PORT}/api/reviews
- Gallery: http://localhost:${PORT}/api/gallery`);
});

export default app;
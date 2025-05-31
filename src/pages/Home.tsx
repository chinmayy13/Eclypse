import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ProductSection from '../components/ProductSection';
import Accordion from '../components/Accordion';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { getProduct } from '../api';
import { Product } from '../types';

const Home: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product data');
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 mx-5">
        <Header />
        <Hero />
        <Gallery />
        <ProductSection />
        <Accordion product={product} loading={loading} error={error} />
        <ReviewSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
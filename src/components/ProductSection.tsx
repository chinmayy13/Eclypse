import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { getProduct } from '../api';
import { Product } from '../types';

const ProductSection: React.FC = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct();
        setProduct(data);
        if (data.sizes.length > 0) {
          setSelectedSize(data.sizes[0]);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    navigate('/cart', { state: { product, selectedSize } });
  };

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product, selectedSize } });
  };

  if (loading) return <div className="text-center py-10">Loading product details...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!product) return null;

  return (
    <div className="my-16 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-xl font-semibold text-gray-800 mb-4">
          ${product.price.toFixed(2)}
        </p>
        
        <div className="mb-6">
          <label htmlFor="size-select" className="block mb-2 text-sm font-medium text-gray-700">
            Select Size
          </label>
          <select
            id="size-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
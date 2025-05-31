import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, CreditCard } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize } = location.state || {};

  const handleCheckout = () => {
    navigate('/checkout', { state: { product, selectedSize } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 mx-5">
        <Header />
        <div className="max-w-4xl mx-auto py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </button>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
              {product ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-gray-600">Size: {selectedSize}</p>
                      <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <span>Total</span>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </button>
                </div>
              ) : (
                <p className="text-center text-gray-500">Your cart is empty</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
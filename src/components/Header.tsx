import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-5">
      <nav className="flex justify-end">
        <ul className="flex space-x-6">
          <li>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              About Us
            </button>
          </li>
          <li>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              Waitlist
            </button>
          </li>
          <li>
            <button className="text-gray-800 hover:text-gray-600 transition-colors flex items-center">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Cart
            </button>
          </li>
          <li>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              Buy
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
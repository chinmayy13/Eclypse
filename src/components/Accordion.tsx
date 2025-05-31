import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types';

interface AccordionProps {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const Accordion: React.FC<AccordionProps> = ({ product, loading, error }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  if (loading) return <div className="text-center py-6">Loading product details...</div>;
  if (error) return <div className="text-center py-6 text-red-500">{error}</div>;
  if (!product) return null;

  return (
    <div className="my-12 border-t border-b border-gray-200 py-4">
      {/* Size & Fit */}
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          className="w-full py-4 px-2 flex justify-between items-center focus:outline-none"
          onClick={() => toggleSection('sizeFit')}
        >
          <h3 className="text-lg font-medium text-gray-800">Size & Fit</h3>
          {openSection === 'sizeFit' ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        <div 
          className={`px-2 pb-4 transition-all duration-300 ${
            openSection === 'sizeFit' ? 'block' : 'hidden'
          }`}
        >
          <p className="text-gray-700">{product.details.sizeFit}</p>
        </div>
      </div>

      {/* Delivery & Returns */}
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          className="w-full py-4 px-2 flex justify-between items-center focus:outline-none"
          onClick={() => toggleSection('deliveryReturns')}
        >
          <h3 className="text-lg font-medium text-gray-800">Delivery & Returns</h3>
          {openSection === 'deliveryReturns' ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        <div 
          className={`px-2 pb-4 transition-all duration-300 ${
            openSection === 'deliveryReturns' ? 'block' : 'hidden'
          }`}
        >
          <p className="text-gray-700">{product.details.deliveryReturns}</p>
        </div>
      </div>

      {/* How This Was Made */}
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          className="w-full py-4 px-2 flex justify-between items-center focus:outline-none"
          onClick={() => toggleSection('howMade')}
        >
          <h3 className="text-lg font-medium text-gray-800">How This Was Made</h3>
          {openSection === 'howMade' ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        <div 
          className={`px-2 pb-4 transition-all duration-300 ${
            openSection === 'howMade' ? 'block' : 'hidden'
          }`}
        >
          <p className="text-gray-700">{product.details.howMade}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
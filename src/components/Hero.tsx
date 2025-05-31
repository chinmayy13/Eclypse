import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="mt-5 mb-10">
      <h1 className="text-5xl font-bold text-center mb-8 tracking-wider">ECYLPSE</h1>
      <div className="w-full h-[400px] bg-gray-200 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
          alt="ECYLPSE Hero"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <p className="mt-6 text-center text-lg text-gray-700 max-w-2xl mx-auto">
        Redefining innovation with cutting-edge design and unparalleled performance. 
        Experience the future of technology with ECYLPSE.
      </p>
      <div className="text-center mt-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors underline">
          Learn more about ECYLPSE
        </a>
      </div>
    </div>
  );
};

export default Hero;
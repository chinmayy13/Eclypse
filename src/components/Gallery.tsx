import React, { useState, useEffect } from 'react';
import { getGallery } from '../api';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery();
        setImages(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load gallery images');
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <div className="text-center py-10">Loading gallery...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  const firstRowImages = images.slice(0, 2);
  const secondRowImages = images.slice(2, 5);

  return (
    <div className="my-12">
      {/* First row: 2 images */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {firstRowImages.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>

      {/* Second row: 3 images */}
      <div className="grid grid-cols-3 gap-4">
        {secondRowImages.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

const GalleryItem: React.FC<{ image: GalleryImage }> = ({ image }) => {
  return (
    <div className="relative overflow-hidden group">
      <img 
        src={image.url} 
        alt={image.alt} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <p className="text-white font-medium text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.caption}
        </p>
      </div>
    </div>
  );
};

export default Gallery;
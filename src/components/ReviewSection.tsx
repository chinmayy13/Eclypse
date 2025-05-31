import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { getReviews } from '../api';
import { Review } from '../types';

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="text-center py-10">Loading reviews...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="space-y-8">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-lg">{review.name}</h3>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default ReviewSection;
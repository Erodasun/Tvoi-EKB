import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Reviews() {
  const { placeTitle } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/${placeTitle}`);
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeTitle]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="reviews">
      <h2>Отзывы о {placeTitle}</h2>
      {reviews.length === 0 ? (
        <p>Нет отзывов для этого места.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <p><strong>{review.author}</strong>: {review.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;

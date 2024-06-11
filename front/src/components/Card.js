import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ place }) {
  const navigate = useNavigate();

  const handleReviewsClick = () => {
    navigate(`/reviews/${place.title}`);
  };

  return (
    <div className="card">
      <img src={place.image} alt={place.title} />
      <div className="card-content">
        <h3>{place.title}</h3>
        <p>{place.description}</p>
        <p>Адрес: {place.address}</p>
        <button onClick={handleReviewsClick}>Отзывы</button>
      </div>
    </div>
  );
}

export default Card;

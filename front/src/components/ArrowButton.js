import React from 'react';

function ArrowButton({ direction, onClick }) {
  return (
    <button className={`arrow-button ${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  );
}

export default ArrowButton;

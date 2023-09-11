import React from 'react';
import './Card.css';

const Card = () => {
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 4', content: 'Content for Card 4' },
    { id: 5, title: 'Card 5', content: 'Content for Card 5' },
    { id: 6, title: 'Card 6', content: 'Content for Card 6' },
    { id: 7, title: 'Card 7', content: 'Content for Card 7' },
    { id: 8, title: 'Card 8', content: 'Content for Card 8' },
  ];

  return (
    <div className='body-middle'>
    <div className="card-grid">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;

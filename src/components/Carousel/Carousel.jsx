import React, { useState, useEffect } from 'react';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % (cards.length - 2));
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, cards.length]);

  return (
    <div style={styles.container}>
      {cards.slice(currentIndex, currentIndex + 3).map((card, index) => {
        return (
          <div 
            key={index} 
            style={styles.card}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
  },
  card: {
    flex: 1,
    height: '100%',
    transition: 'transform 0.5s ease-in-out'
  }
};

export default Carousel;

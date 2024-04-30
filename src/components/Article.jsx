
import React from 'react';

const Article = ({ title, date, preview }) => {
  const minutesToRead = Math.ceil(preview.split(' ').length / 200); 
  const renderReadTime = () => {
    let emojis = '';
    if (minutesToRead <= 30) {
      const coffeeCups = Math.ceil(minutesToRead / 5);
      emojis = '☕️'.repeat(coffeeCups);
    } else {
      const bentoBoxes = Math.ceil(minutesToRead / 10);
      emojis = '🍱'.repeat(bentoBoxes);
    }
    return `${emojis} ${minutesToRead} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderReadTime()}</p>
    </article>
  );
}

export default Article;

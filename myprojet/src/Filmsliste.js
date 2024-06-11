import React from 'react';
import Cardfilms from './Cardfilms';

export default function Filmsliste({ films }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: "15px" }}>
      {films.map((film) => (
        <Cardfilms
          key={film.id}
          id={film.id}
          titre={film.titre}
          description={film.description}
          posterURL={film.posterURL}
          note={film.Rating}
        />
      ))}
    </div>
  );
}

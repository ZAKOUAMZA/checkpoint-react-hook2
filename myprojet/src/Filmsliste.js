
import React from 'react';
import Cardfilms from './Cardfilms';

export default function Filmsliste({ films }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns:'repeat(4, 1fr)', gridGap:"15px",paddingLeft:"20%"}}>
      {films.map((film, index) => ( 
        <Cardfilms 
          key={index}
          titre={film.titre}
          image={film.image}
          description={film.description}
          posterURL={film.posterURL}
          note={film.note}
        />
      ))}
    </div>
  );
}

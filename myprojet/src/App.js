import React, { useState } from 'react';
import Filmsliste from './Filmsliste';
import { Container } from 'react-bootstrap';
import Card from './Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmDetails from './FilmDetails'; 


export default function App() {
// ceci est un exemple   
  const [films, setFilms] = useState([  
    { id: '1', titre: 'Film 1', posterURL: "/vid/vi1.mp4", description: "Un groupe d'astronautes découvre un artefact extraterrestre mystérieux sur la Lune, déclenchant une mission périlleuse vers Jupiter dans 2001: L'Odyssée de l'espace.", Rating: 3 },
    { id: '2', titre: 'Film 2', posterURL: "/vid/vi1.mp4", description: "Bonjour 2", Rating: 2 },
    { id: '3', titre: 'Film 3', posterURL: "/vid/vi1.mp4", description: "Bonjour 3", Rating: 1 },
    { id: '4', titre:  'Film 4', posterURL: "/vid/vi1.mp4", description: "Bonjour 4", Rating: 5 },
    { id: "5", titre: "Film 5 ",posterURL: "/vid/vi1.mp4", description: "Bonjour 5", Rating: 3 },
    { id: "6", titre: "Film 6",posterURL: "/vid/vi1.mp4", description: "Bonjour 6", Rating: 2 },
    { id: '7', titre: 'Film 7', posterURL: "/vid/vi1.mp4", description: "Bonjour 7", Rating: 3 },
    { id: '8', titre: 'Film 8', posterURL: "/vid/vi1.mp4", description: "Bonjour 8", Rating: 2 },
    { id: '9', titre: 'Film 9', posterURL: "/vid/vi1.mp4", description: "Bonjour 9", Rating: 1 },
    { id: '10', titre: 'Film 10', posterURL: "/vid/vi1.mp4", description: "Bonjour 10", Rating: 3 },
    { id: '11', titre: 'Film 11', posterURL: "/vid/vi1.mp4", description: "Bonjour 11", Rating: 2 },
    { id: '12', titre: 'Film 12',posterURL: "/vid/vi1.mp4", description: "Bonjour 12", Rating: 1 }
  ]);

  const [filteredFilms, setFilteredFilms] = useState(films);
  const maFonctionDeFiltrage = (filtres, idFilm) => {
    const { titre, note } = filtres;
  
    const filmsFiltres = films.filter(el => {
      const titreMatch = titre ? el.titre.toUpperCase().includes(titre.toUpperCase()) : true;
      const noteMatch = (typeof note !== 'undefined') ? el.Rating >= note : true;
      return titreMatch && noteMatch;
    });
  
    setFilteredFilms(filmsFiltres);
  
    if (idFilm) {
      const filmTrouve = films.find(film => film.id.toString() === idFilm);
      if (filmTrouve) {
        setFilteredFilms([filmTrouve]);
      } else {
        setFilteredFilms([]);
      }
    }
  };
  

  
  return (
    <Router>
      <Container>
        <Card onFilter={maFonctionDeFiltrage} />
        <Routes>
          <Route path="/" element={<Filmsliste films={filteredFilms} />} />
          <Route path="/film/:id" element={<FilmDetails films={filteredFilms} maFonctionDeFiltrage={maFonctionDeFiltrage} />} />
        </Routes>
      </Container>
    </Router>
  );
}
import React from 'react';
import { useParams,useNavigate  } from 'react-router-dom'; // Importez useLocation ici
import ReactPlayer from 'react-player';
import { Card } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';

export default function FilmDetails({ films  }) {
  const { id } = useParams();
  const navigate = useNavigate ();
  const film = films.find(film => film.id.toString() === id);

  return (
    <div>
      <Button onClick={() => navigate('/')} style={{ marginBottom: '20px',color:'black', backgroundColor: '#0000000D', borderColor: '#0000000D' }}>Retour à l'accueil</Button>
      <Card style={{ zIndex: "1000", width: '100%', cursor: "pointer",margin:'0px',padding:'0px', position: 'relative' }}>
        <div style={{position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */  }}>
          <ReactPlayer url={film.posterURL}
           controls 
           width="100%"
           height="100%" 
            style={{ position: 'absolute', top: 0, left: 0 }} 
            />
        </div>
        <Card.Body >
          <Card.Title>{film.titre}</Card.Title>
          <Card.Text>{film.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
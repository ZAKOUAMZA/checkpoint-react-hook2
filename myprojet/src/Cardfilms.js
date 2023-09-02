import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Rating } from 'react-simple-star-rating'
export default function Cardfilms({ image,titre, description, posterURL, note }) {
  return (
    
    <div  >
      <Card style={{zIndex:"1000", width: '15rem',borderRadius: '15px'}}>

      <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
      <ReactPlayer   url={posterURL} controls width="100%"  height="auto" />
      </div>
      <Card.Body style={{height:'50px'}} >
        <Card.Title>{titre}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

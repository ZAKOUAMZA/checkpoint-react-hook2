import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function Cardfilms({ id, titre, description, posterURL, note }) {
  return (
    <Link to={`/film/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ zIndex: "1000", width: '20rem', cursor: "pointer" }}>
        <div style={{ overflow: 'hidden' }}>
          <ReactPlayer url={posterURL} controls width="100%" height="auto" />
        </div>
        <Card.Body style={{ height: '50px' }}>
          <Card.Title>{titre}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import {useNavigate  } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({ onFilter }) {
  const noteRef = useRef();
  const navigate = useNavigate ();

  const handleFilterClick = () => {
    const titre = noteRef.current.value;
    onFilter({ titre });
  };
  const [name, setName] = useState("");

  const affiche = (event) => {
    setName(event.target.value);
  }
  return (
    <div >
      <Navbar fixed="top" bg="white" variant="dark">
      <Container fluid style={{ padding: '0 2%' }}>
          <h1 style={{ fontSize: "2em", color: "red", cursor: "pointer" }} onClick={() => navigate('/')}>
            AmzaTube</h1>
          <Col xs="auto">
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }} onClick={() => navigate('/')}>Tous</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>Music</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>Mix</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>En direct</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>Récitation</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>Python</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>HTML5</Button>
            <Button style={{ marginLeft: "20px", color: "black", borderColor: "#0000000D", backgroundColor: "#0000000D", cursor: "pointer" }}>Jeu vidéo</Button>

          </Col>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                value={name}
                onChange={affiche}
                placeholder="Recherche..."
                ref={noteRef}
                style={{ width: '700px', height: '40px'}}
              />
              <Button style={{ marginLeft: "5%" }} onClick={handleFilterClick}><FontAwesomeIcon icon="search" /></Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p style={{ padding: "5% 0% 2% 50%", fontSize: "2em", color: "red" }}>{name ? `${name}` : ""}</p>
    </div>
  )
}

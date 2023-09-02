import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({ onFilter }) {
    const noteRef = useRef();

  const handleFilterClick = () => {
    const titre = noteRef.current.value;
    onFilter({ titre });
  };
  const [name,setName]=useState("");

  const affiche = (event)=>{
    setName(event.target.value);
  }
  return (
    <div >
    <Navbar style={{position:'fixed',zIndex:"10000",background:"white",width:'100%'}} >
    <Container >
      <h1 style={{fontSize:"2em",color:"red",cursor:"pointer"}}>           
AmzaTube</h1>
<Col  xs="auto">
            <Button  style={{marginLeft:"20px",color:"white",borderColor:"#0000000D", backgroundColor:"black",cursor:"pointer"}} type="submit">Tous</Button>
            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">Music</Button>
            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">Mix</Button>
            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">En direct</Button>


            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">Récitation</Button>
            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">Python</Button>
            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">HTML5</Button>
            <Button  style={{marginLeft:"20px",color:"black",borderColor:"#0000000D", backgroundColor:"#0000000D",cursor:"pointer"}} type="submit">Jeu vidéo</Button>

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
          />
        <Button style={{marginLeft:"5%"}} onClick={handleFilterClick}><FontAwesomeIcon icon="search" /></Button>
        </Form>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  <p style={{padding:"5% 0% 2% 50%",fontSize:"2em" , color:"red"}}>{name ? `${name}` : ""}</p>
  </div>
  )
}

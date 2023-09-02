
import React, { useState } from 'react';

export default function Alerte() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '99999',
  };

  const contentStyle = {
    border:"none",
    background:"white",
   /* boxShadow:"2px -2px 11px 10px #f5f5f5",*/
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    borderTopRightRadius: '50px',
    textAlign: 'center', 
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '0', 
    right: '-1px',
    width: '15%',
    fontSize: '40px',
    color:'red',
    borderTopRightRadius: '50px',
    background:'white',
    cursor: 'pointer',
  };

  const image = {
    width: '400px',
    height: '350px',
    borderTopRightRadius: '50px',

  };

  return (
    
    <div style={modalStyle}>
  <div style={contentStyle}>
        <span style={closeButtonStyle} onClick={closeModal}>
          &times;
        </span>
        <img
          style={image}
          src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=O9w68dSAsnMAX9bWKoj&_nc_oc=AQkC8jO6WIYKMpKIq3gn1ntxw98PgndxVQNH5DMUBcH1Ngkd1N44TYb5sujGYKapjTM&_nc_ht=scontent.ftun15-1.fna&oh=00_AfCbVgJEz-dBieWwIzDLqibiaYoUti542ux0jeT_xvyieA&oe=64F747A9"
          alt="Votre Image"
        />
      </div>
      
    </div>

  );
}

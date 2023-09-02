import React, { useState,useEffect } from 'react';
import Filmsliste from './Filmsliste';
import { Container } from 'react-bootstrap';
import Card from './Card';
import Alerte from './Alerte';
import Active from './Active';

export default function App() {
  const [films, setFilms] = useState([
    {titre:'French Montana ',posterURL:"https://youtu.be/8CKuWPRq2Ps?list=PL_dH0vFHwpN4qZ5uSy8NI79CTtF3hhq12",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:3},
    {titre:'Samara Official  ',posterURL:"https://youtu.be/3RuHe_eWOt0",description:"",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",Rating:2},
    {titre:'Tiakola - Meuda ',posterURL:"https://youtu.be/axJQz2hx4sY",description:"",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",Rating:1},
    {titre:'Soolking ft. Gazo ',posterURL:"https://youtu.be/6WrVXWgn094",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:5},
    {titre:"DJ Khaled ",posterURL:"https://youtu.be/weeI1G46q0o",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:3},
    {titre:"Didi B . Miedjia ",posterURL:"https://youtu.be/MbnE3WrOw54",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:2} ,
    {titre:'DYSTINCT ft. Naza ',posterURL:"https://youtu.be/Z8_ybWzumGQ",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:3},
    {titre:'Doupi Papillon   ',posterURL:"https://youtu.be/8dguvuJoJ1Q",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:2},
    {titre:'Davido -UNAVAIL',posterURL:"https://youtu.be/OSBan_sH_b8",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:1},
    {titre:'Imam Soudais',posterURL:"https://youtu.be/ST45wavjDkw",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:3},
    {titre:'Douah Médine ',posterURL:"https://youtu.be/N9QSL1PLUS4",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:2},
    {titre:'15 APIs INCROYABLES ',posterURL:"https://youtu.be/4yfxEMm_SKo",image:"https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/362683888_246331284917247_2296429216278077612_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=lAsYHhy_cRQAX9MQCCN&_nc_oc=AQk8KOxzZwzCFrPi8g9iYuCJRbsRA4FIugdqvPY05Ldl0GAb6cSwFnUlsDX7v9mpnO8&_nc_ht=scontent.ftun15-1.fna&oh=00_AfA7BPJ5swMSEdqD6HUlBUZ8iArbg2qj7QYGo_j5jTG4bg&oe=64F54D69",description:"",Rating:1}
  ]);

  const maFonctionDeFiltrage = (filtres) => {
        const { titre, note } = filtres;
      
        const filmsFiltres = films.filter(el => {
          const titreMatch = el.titre.toUpperCase().includes(titre.toUpperCase());
          const noteMatch = el.note >= note || !note;
          return titreMatch && noteMatch;
        });
      
        setFilms(filmsFiltres);
      };
      

  return (
    <Container>
    <Card  onFilter={maFonctionDeFiltrage}/>
    <Alerte/>
    <Active/>
      <Filmsliste films={films} />

    </Container>
      
  );
}

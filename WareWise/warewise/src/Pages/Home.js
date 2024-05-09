import React from "react";
import{Link} from "react-router-dom";
import BannerImage from '../Assets/wow.jpg';
import '../styles/Home.css';

function Home () {
  return (
  <div className="home"  style={{ backgroundImage: `url(${BannerImage})`}}> 
    <div className="headerContainer">
      <h1>WareWise</h1>
      <p> VOTRE GUIDE DE GESTION D'ENTREPOT</p>
      <Link to="/Createorder">
          <button> Créer votre commande </button>
        </Link>
    </div>
  </div>
  );
};

export default Home;

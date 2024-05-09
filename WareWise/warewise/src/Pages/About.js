import React from "react";
import Warep from "../Assets/warew.jpg"
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Warep})` }}></div>
      <div className="aboutBottom">
        <h1> À PROPOS DE NOUS</h1>
        <p> - Qui nous sommes? WareWise est l'un des principaux fournisseurs de solutions de gestion d'entrepôt. Notre équipe est composée de professionnels dévoués possédant des années d'expérience en logistique, en gestion de la chaîne d'approvisionnement et en développement de logiciels. Nous nous engageons à aider les entreprises à rationaliser leurs opérations d’entrepôt et à atteindre une efficacité maximale.
</p>
        <p> - Notre mission? Notre mission est de doter les entreprises des outils dont elles ont besoin pour optimiser leurs opérations d’entrepôt. Nous pensons qu'avec la bonne technologie, les entreprises peuvent réduire leurs coûts opérationnels, améliorer leur productivité et, en fin de compte, offrir un meilleur service à leurs clients.</p>
        <p> - Notre vision? Nous envisageons un avenir où les opérations d’entrepôt seront transparentes, efficaces et sans erreur. Grâce à une innovation continue, nous nous efforçons de faire de cette vision une réalité pour les entreprises du monde entier.</p>
        <p> - Pourquoi nous choisir? Avec WareWise, vous obtenez bien plus qu'une simple application de gestion d'entrepôt. Vous obtenez un partenaire dédié à votre réussite. Notre équipe est toujours prête à vous fournir assistance et conseils, afin que vous puissiez tirer le meilleur parti de notre application.</p>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import './Serie.css';
import Title from './Title';
import Carrousel from './Carrousel';


const Serie = () => {

  const [synopsis, setSynopsis] = React.useState(true);
  const togSynopsis = () => setSynopsis (!synopsis);

  const [saisons, setSaisons] = React.useState(false);
  const togSaisons = () => setSaisons(!saisons);

  const [episodes, setEpisodes] = React.useState(false);
  const togEpisodes = () => setEpisodes(!episodes);

  const [suggestions, setSuggestions] = React.useState(false);
  const togSuggestions = () => setSuggestions(!suggestions);
  
  return (
    <div className="Serie">
      <Title titleName="Titre de la série"/>
      <img src="./assets/img/media.jpg" alt="Je suis une affiche du film" />
      <p>Je suis la note de la série</p> 
      <ul className="navBar2">
        <li onClick={togSynopsis}>Synopsis</li>
        <li onClick={togSaisons}>Saisons</li>
        <li onClick={togEpisodes}>épisodes</li>
        <li onClick={togSuggestions}>Suggestions</li>
        <li>Liens plateformes</li>
      </ul>
      <div className={synopsis? 'showSyno' : 'noSyno'}>
        <p>Date de Sortie</p>
        <p>C`est l`histoire de...</p>
      </div>
      <p className={saisons? 'showSaisons' : 'noSaisons'}>Saisons</p>
      <p className={episodes? 'showEpisodes' : 'noEpisodes'}>Épisodes</p>
      <p className={suggestions? 'showSug' : 'noSug'}><Carrousel /></p>
    </div> 
  )}; 

export default Serie;
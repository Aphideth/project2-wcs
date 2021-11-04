import React, { useState } from 'react';
// import OurTeam  from './OurTeam';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [isSrcActive, setIsSrcActive] = useState(false);
  const toggleClass = () => setIsSrcActive(!isSrcActive);
  const [isContactActive, setIsContactActive] = useState(false);
  const toggleClassContact = () => setIsContactActive(!isContactActive);

  // const handleSubmit = () => {
  //   alert('Message envoyé')
  // }

  return (
    <div className="footer dark-mode">
      <ul className="footer-nav">
        <li className="footer-link">
          <button type="button" className="sources" onClick={toggleClass}>
            <span className="">Nos sources</span>
          </button>
        </li>
        <li className="footer-link">
          <button type="button" className="equipe">
            <Link to="/OurTeam">Notre Equipe</Link>
          </button>
        </li>
        <li className="footer-link">
          <button
            type="button"
            className="contact"
            onClick={toggleClassContact}
          >
            <span className="">Contact</span>
          </button>
        </li>
      </ul>
      <div
        className={
          isSrcActive
            ? 'footer-sources-links show-links'
            : 'footer-sources-links'
        }
      >
        <ul className="sources-links">
          <li className="sources-link">https://www.themoviedb.org/</li>
          <li className="sources-link">https://www.betaseries.com/api/</li>
          <li className="sources-link">http://www.omdbapi.com/</li>
        </ul>
      </div>
      {/* <div className={isContactActive ? "form-box-show": "form-box"} >
        <div className='contacts-form-toggle'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
            </div>
            <button type="submit" className='btn-submit'>Envoyer</button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

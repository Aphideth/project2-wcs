import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

//import Link from 'react-router-dom';
import './Footer.css';

Modal.setAppElement('#root');
function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalContact, setOpenModalContact] = useState(false);
  const formSend = (message) => {
    alert(message);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_209wzbv',
        e.target,
        'user_C5yaKoafAWtmBjxtvO0um'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="footer dark-mode">
      <div className="sources-modal">
        <button className="sources" onClick={() => setOpenModal(true)}>
          Nos sources
        </button>
        <Modal
          isOpen={openModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModal(false)}
          style={{
            content: {
              padding: 0,
              background: 0,
            },
          }}
        >
          <div className="form-box">
            <div className="form-header">
              <h2>Nos sources</h2>
            </div>
            <a
              href="http://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              www.themoviedb.org/
            </a>
            <a href="http://www.omdbapi.com/" target="_blank" rel="noreferrer">
              www.omdbapi.com/
            </a>
            <a
              href="http://www.betaseries.com/api/"
              target="_blank"
              rel="noreferrer"
            >
              www.betaseries.com/api/
            </a>
          </div>
          <div>
            <button className="closeBtn" onClick={() => setOpenModal(false)}>
              X
            </button>
          </div>
        </Modal>
      </div>

      <div className="contact-modal">
        <button className="contact" onClick={() => setOpenModalContact(true)}>
          Nous Contacter
        </button>
        <Modal
          isOpen={openModalContact}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModalContact(false)}
          style={{
            content: {
              padding: 0,
              background: 0,
            },
          }}
        >
          <div className="form-box">
            <div className="form-header">
              <h2>Contact</h2>
            </div>
            <form onSubmit={sendEmail}>
              <div className="form">
                <label> Une demande ? </label>
                <label> Une suggestion ? </label>
                <label> Vous pouvez nous contacter ici :</label>
                <input
                  type="text"
                  required="required"
                  placeholder="Nom"
                  name="name"
                />
                <input
                  type="email"
                  required="required"
                  placeholder="E-mail"
                  name="email"
                />
                <textarea
                  type="text"
                  required="required"
                  rows="5"
                  placeholder="Votre message ici..."
                  name="message"
                />
              </div>
              <button
                type="submit"
                id="submitBtn"
                className="submitBtn"
                onClick={() => formSend(`Merci de nous avoir contacté!`)}
              >
                Envoyer
              </button>
            </form>
          </div>
          <div>
            <button
              className="closeBtn"
              onClick={() => setOpenModalContact(false)}
            >
              X
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Footer;

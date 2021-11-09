import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

//import Link from 'react-router-dom';
import './Footer.css';

Modal.setAppElement('#root');
function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalContact, setOpenModalContact] = useState(false);

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
          Sources
        </button>
        <Modal
          isOpen={openModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModal(false)}
        >
          <div className="form-box">
            <h2>Nos sources</h2>
            <p>www.themoviedb.org/</p>
            <p>www.omdbapi.com/</p>
            <p>www.betaseries.com/api/</p>
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
          Contact
        </button>
        <Modal
          isOpen={openModalContact}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModalContact(false)}
        >
          <div className="form-box">
            <h2>Contact</h2>
            <form onSubmit={sendEmail}>
              <div className="form">
                <label> Une demande ? </label>
                <label> Une suggestion ? </label>
                <label> Vous pouvez nous contacter ici !</label>
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
                  placeholder="Message"
                  name="message"
                />
              </div>
              <button type="submit" id="submitBtn" className="submitBtn">
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

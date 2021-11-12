import React, { useState } from 'react';
import Modal from 'react-modal';
//import Link from 'react-router-dom';
import './Footer.css';

Modal.setAppElement('#root');
function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalContact, setOpenModalContact] = useState(false);

  return (
    <div className="footer dark-mode">
      <div className="sources-modal">
        <button className="sources" onClick={() => setOpenModal(true)}>
          Our Sources
        </button>
        <Modal
          isOpen={openModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModal(false)}
        >
          <div className="form-box">
            <h2>Our sources</h2>
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
          Contact us
        </button>
        <Modal
          isOpen={openModalContact}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModalContact(false)}
        >
          <div className="form-box">
            <h2>Contact us</h2>
            <form>
              <div className="form">
                <label> An advice ? </label>
                <label> Any suggestion ? </label>
                <label> You can contact us here !</label>
                <input type="text" required="required" placeholder="Name" />
                <input type="email" required="required" placeholder="Mail" />
                <textarea
                  type="text"
                  required="required"
                  rows="5"
                  placeholder="Tape your message here..."
                />
              </div>
              <button type="submit" id="submitBtn" className="submitBtn">
                Send
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

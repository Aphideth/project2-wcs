import React, { useState } from "react";
import Modal from "react-modal";
//import Link from 'react-router-dom';
import "./Footer.css";

Modal.setAppElement("#root");
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalContact, setOpenModalContact] = useState(false);

  return (
    <div className="App">
      <div className="container">
        {/* first modal */}
        <button onClick={() => setOpenModal(true)}>Sources</button>
        <Modal
          isOpen={openModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModal(false)}
          style={{
            overlay: {
              backgroundColor: "grey",
            },
          }}
        >
          <h2>Sources</h2>
          <p>www.themoviedb.org/</p>
          <p>www.omdbapi.com/</p>
          <p>www.betaseries.com/api/</p>
          <div>
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>
        </Modal>
        {/* team link */}
        {/* <Link to="/OurTeam">
          <button type="button">
          Notre équipe
          </button>
        </Link> */}
        {/* <button type="button" className="equipe"><Link to="/OurTeam">Notre équipe</Link></button> */}
        {/* second modal */}
        <button onClick={() => setOpenModalContact(true)}>Contact</button>
        <Modal
          isOpen={openModalContact}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenModalContact(false)}
          style={{
            overlay: {
              backgroundColor: "grey",
            },
          }}
        >
          <h2>Contact</h2>
          <div className = "form-box">
            <form>
              <div>
                <label> Votre message </label>
                <input type="text" required="required" placeholder="Nom"/>        
                <input type="email" required="required" placeholder="E-mail"/>
                <textarea type="text" required="required" placeholder="Message"/>
              </div>
              <button type = "submit" id= "submitBtn" className = "submitBtn">Envoyer</button>
            </form>
          </div>
          <div>
            <button onClick={() => setOpenModalContact(false)}>X</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;

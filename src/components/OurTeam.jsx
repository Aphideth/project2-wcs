import React, { useState } from 'react';
import Modal from 'react-modal';
import mathilde from '../assets/img/mathilde.png';
import aphideth from '../assets/img/aphideth.png';
import giovanni from '../assets/img/giovanni.png';
import kevin from '../assets/img/kevin.jpg';
import './OurTeam.css';
// import Title from './Title';

const OurTeam = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  return (
    <div>
      <h2>Our team</h2>
      <div className="profil">
        <div className="first-member">
          <div
            role="button"
            onClick={() => setOpenModal1(true)}
            onKeyPress={() => {}}
            tabIndex="0"
          >
            <img className="imgAvatar" src={mathilde} alt="Avatar" />
          </div>
          <Modal
            isOpen={openModal1}
            shouldCloseOnOverlayClick
            onRequestClose={() => setOpenModal1(false)}
            style={{
              overlay: {
                backgroundColor: 'grey',
              },
            }}
          >
            <h2>Mathilde</h2>
            <img className="imgAvatar" src={mathilde} alt="avatar" />
            <p>Ma présentation</p>
            <p>
              Love cats Love cats Love cats Love cats Love cats Love cats Love
              cats Love cats
            </p>

            <div className="movies-podium">
              <p>Mon top films</p>
              <div className="first-movie">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-movies">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>

            <div className="series-podium">
              <p>Mon top séries</p>
              <div className="first-series">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-series">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>
            <div className="social-links">
              <p>Mail</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div>
              <button type="button" onClick={() => setOpenModal1(false)}>
                Close
              </button>
            </div>
          </Modal>
        </div>
        <div className="second-member">
          <div
            role="button"
            onClick={() => setOpenModal2(true)}
            onKeyPress={() => {}}
            tabIndex="0"
          >
            <img className="imgAvatar" src={aphideth} alt="Avatar" />
          </div>
          <Modal
            isOpen={openModal2}
            shouldCloseOnOverlayClick
            onRequestClose={() => setOpenModal2(false)}
            style={{
              overlay: {
                backgroundColor: 'grey',
              },
            }}
          >
            <h2>Aphideth</h2>
            <img className="imgAvatar" src={aphideth} alt="avatar" />
            <p>Ma présentation</p>
            <p>
              Love cats Love cats Love cats Love cats Love cats Love cats Love
              cats Love cats
            </p>

            <div className="movies-podium">
              <p>Mon top films</p>
              <div className="first-movie">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-movies">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>

            <div className="series-podium">
              <p>Mon top séries</p>
              <div className="first-series">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-series">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>
            <div className="social-links">
              <p>Mail</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div>
              <button type="button" onClick={() => setOpenModal2(false)}>
                Close
              </button>
            </div>
          </Modal>
        </div>
        <div className="third-member">
          <div
            role="button"
            onClick={() => setOpenModal3(true)}
            onKeyPress={() => {}}
            tabIndex="0"
          >
            <img className="imgAvatar" src={giovanni} alt="Avatar" />
          </div>
          <Modal
            isOpen={openModal3}
            shouldCloseOnOverlayClick
            onRequestClose={() => setOpenModal3(false)}
            style={{
              overlay: {
                backgroundColor: 'grey',
              },
            }}
          >
            <h2>Giovanni</h2>
            <img className="imgAvatar" src={giovanni} alt="avatar" />
            <p>Ma présentation</p>
            <p>
              Love cats Love cats Love cats Love cats Love cats Love cats Love
              cats Love cats
            </p>

            <div className="movies-podium">
              <p>Mon top films</p>
              <div className="first-movie">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-movies">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>

            <div className="series-podium">
              <p>Mon top séries</p>
              <div className="first-series">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-series">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>
            <div className="social-links">
              <p>Mail</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div>
              <button type="button" onClick={() => setOpenModal3(false)}>
                Close
              </button>
            </div>
          </Modal>
        </div>
        <div className="fourth-member">
          <div
            role="button"
            onClick={() => setOpenModal4(true)}
            onKeyPress={() => {}}
            tabIndex="0"
          >
            <img className="imgAvatar" src={kevin} alt="Avatar" />
          </div>
          <Modal
            isOpen={openModal4}
            shouldCloseOnOverlayClick
            onRequestClose={() => setOpenModal4(false)}
            style={{
              overlay: {
                backgroundColor: 'grey',
              },
            }}
          >
            <h2>Kévin</h2>
            <img className="imgAvatar" src={kevin} alt="avatar" />
            <p>Ma présentation</p>
            <p>
              Love cats Love cats Love cats Love cats Love cats Love cats Love
              cats Love cats
            </p>

            <div className="movies-podium">
              <p>Mon top films</p>
              <div className="first-movie">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-movies">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>

            <div className="series-podium">
              <p>Mon top séries</p>
              <div className="first-series">
                <img src="https://placekitten.com/200/287" alt="" />
              </div>
              <div className="second-third-series">
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
                <div>
                  <img src="https://placekitten.com/200/287" alt="" />
                </div>
              </div>
            </div>
            <div className="social-links">
              <p>Mail</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div>
              <button type="button" onClick={() => setOpenModal4(false)}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

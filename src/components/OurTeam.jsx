import React, { useState } from 'react';
import Modal from 'react-modal';
import mathilde from '../assets/img/mathilde.png';
import aphideth from '../assets/img/aphideth.png';
import giovanni from '../assets/img/giovanni.png';
import kevin from '../assets/img/kevin.jpg';
import element from '../assets/img/element.png';
import leon from '../assets/img/leon.png';
import bigFish from '../assets/img/bigFish.jpg';
import gameOfThrones from '../assets/img/gameOfThrones.jpeg';
import shigekiNoKyojin from '../assets/img/shigekiNoKyojin.jpg';
import chihiro from '../assets/img/chihiro.jpg';
import daria from '../assets/img/daria.jpg';
import futurama from '../assets/img/futurama.jpg';
import pulpfiction from '../assets/img/pulpfiction.jpg';
import scrubs from '../assets/img/scrubs.jpg';
import xmen from '../assets/img/xmen.jpg';
import matrix from '../assets/img/matrix.jpg';
import shutterisland from '../assets/img/shutterisland.jpg';
import breakingbad from '../assets/img/breakingbad.jpg';
import malcolminthemiddle from '../assets/img/malcolminthemiddle.jpg';
import herocorp from '../assets/img/herocorp.jpg';
import './OurTeam.css';
import OurMember from './OurMember';

const OurTeam = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const team = [
    {
      name: 'Aphideth',
      avatar: aphideth,
      presentation: `La première règle du Plop Club est : il est interdit de parler du Plop Club.`,
      top1film: pulpfiction,
      top2film: chihiro,
      top3film: xmen,
      top1serie: scrubs,
      top2serie: futurama,
      top3serie: daria,
      mail: 'mailto:aphideth.dev@gmail.com',
      github: 'https://github.com/Aphideth',
      linkedin: 'https://www.linkedin.com/in/aphidethp/',
    },
    {
      name: 'Mathilde',
      avatar: mathilde,
      presentation: 'Plop',
      top1film: mathilde,
      top2film: mathilde,
      top3film: mathilde,
      top1serie: mathilde,
      top2serie: mathilde,
      top3serie: mathilde,
      mail: 'mailto:mathildelie@gmail.com',
      github: 'https://github.com/Mathilde-E',
      linkedin: 'https://www.linkedin.com/in/mathilde-elie-142743204/',
    },
    {
      name: 'Kévin',
      avatar: kevin,
      presentation: `Le temps est sans importance, seul le 'Plop' est important.`,
      top1film: element,
      top2film: leon,
      top3film: bigFish,
      top1serie: gameOfThrones,
      top2serie: shigekiNoKyojin,
      top3serie: malcolminthemiddle,
      mail: 'mailto:kevinbruno90@gmail.com',
      github: 'https:github.com/KvnBrn',
      linkedin: 'https://www.linkedin.com/in/kevin-bruno-983a6417b/',
    },
    {
      name: 'Giovanni',
      avatar: giovanni,
      presentation: 'Plop',
      top1film: element,
      top2film: matrix,
      top3film: shutterisland,
      top1serie: breakingbad,
      top2serie: malcolminthemiddle,
      top3serie: herocorp,
      mail: 'mailto:rossi.web@gmail.com',
      github: 'https://github.com/eths09',
      linkedin: 'https://www.linkedin.com/in/giovanni-rossi-4b0b98221/',
    },
  ];
  return (
    <div className="profils">
      <h2>La team Plop-Corn vous salue!</h2>
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
                backgroundColor: 'black',
              },
            }}
          >
            <div>
              <OurMember
                memberName={team[1].name}
                memberAvatar={team[1].avatar}
                memberPresentation={team[1].presentation}
                top1film={team[1].top1film}
                top2film={team[1].top2film}
                top3film={team[1].top3film}
                top1serie={team[1].top1serie}
                top2serie={team[1].top2serie}
                top3serie={team[1].top3serie}
                memberMail={team[1].mail}
                memberGithub={team[1].github}
                memberLinkedIn={team[1].linkedin}
              />
              <button
                className="closeBtn"
                type="button"
                onClick={() => setOpenModal1(false)}
              >
                X
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
                backgroundColor: 'black',
              },
            }}
          >
            <div>
              <OurMember
                memberName={team[0].name}
                memberAvatar={team[0].avatar}
                memberPresentation={team[0].presentation}
                top1film={team[0].top1film}
                top2film={team[0].top2film}
                top3film={team[0].top3film}
                top1serie={team[0].top1serie}
                top2serie={team[0].top2serie}
                top3serie={team[0].top3serie}
                memberMail={team[0].mail}
                memberGithub={team[0].github}
                memberLinkedIn={team[0].linkedin}
              />
              <button
                className="closeBtn"
                type="button"
                onClick={() => setOpenModal2(false)}
              >
                X
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
                backgroundColor: 'black',
              },
            }}
          >
            <div>
              <OurMember
                memberName={team[3].name}
                memberAvatar={team[3].avatar}
                memberPresentation={team[3].presentation}
                top1film={team[3].top1film}
                top2film={team[3].top2film}
                top3film={team[3].top3film}
                top1serie={team[3].top1serie}
                top2serie={team[3].top2serie}
                top3serie={team[3].top3serie}
                memberMail={team[3].mail}
                memberGithub={team[3].github}
                memberLinkedIn={team[3].linkedin}
              />
              <button
                className="closeBtn"
                type="button"
                onClick={() => setOpenModal3(false)}
              >
                X
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
                backgroundColor: 'black',
              },
            }}
          >
            <div>
              <OurMember
                memberName={team[2].name}
                memberAvatar={team[2].avatar}
                memberPresentation={team[2].presentation}
                top1film={team[2].top1film}
                top2film={team[2].top2film}
                top3film={team[2].top3film}
                top1serie={team[2].top1serie}
                top2serie={team[2].top2serie}
                top3serie={team[2].top3serie}
                memberMail={team[2].mail}
                memberGithub={team[2].github}
                memberLinkedIn={team[2].linkedin}
              />
              <button
                className="closeBtn"
                type="button"
                onClick={() => setOpenModal4(false)}
              >
                X
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

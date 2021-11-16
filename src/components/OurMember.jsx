import React from 'react';
import PropTypes from 'prop-types';
import mail from '../assets/img/mail.png';
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';
import './OurMember.css';

const OurMember = ({
  memberName,
  memberAvatar,
  memberPresentation,
  top1film,
  top2film,
  top3film,
  top1serie,
  top2serie,
  top3serie,
  memberMail,
  memberGithub,
  memberLinkedIn,
}) => {
  return (
    <div className="members">
      <div className="presentation">
        <h2>{memberName}</h2>
        <img src={memberAvatar} alt={memberName} />
        <p>{memberPresentation}</p>
      </div>
      <div className="top-movie">
        <h2>Mon Top 3 films</h2>
        <figcaption>
          <div className="first" />
          <img src={top1film} alt={memberName} />
        </figcaption>
        <figcaption>
          <div className="second" />
          <img src={top2film} alt={memberName} />
        </figcaption>
        <figcaption>
          <div className="third" />
          <img src={top3film} alt={memberName} />
        </figcaption>
      </div>
      <div className="top-serie">
        <h2>Mon Top 3 séries</h2>
        <figcaption>
          <div className="first" />
          <img src={top1serie} alt={memberName} />
        </figcaption>
        <figcaption>
          <div className="second" />
          <img src={top2serie} alt={memberName} />
        </figcaption>
        <figcaption>
          <div className="third" />
          <img src={top3serie} alt={memberName} />
        </figcaption>
      </div>
      <div className="our-links">
        <h2>Mes liens</h2>
        <a href={memberMail} target="_blank" rel="noreferrer">
          <img src={mail} alt="Icone Mail" className="icone" />
        </a>
        <a href={memberGithub} target="_blank" rel="noreferrer">
          <img src={github} alt="Icone LinkedIn" className="icone" />
        </a>
        <a href={memberLinkedIn} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Icone LinkedIn" className="icone" />
        </a>
      </div>
    </div>
  );
};

OurMember.propTypes = {
  memberName: PropTypes.string,
  memberPresentation: PropTypes.string,
  memberAvatar: PropTypes.string,
  memberMail: PropTypes.string,
  memberGithub: PropTypes.string,
  memberLinkedIn: PropTypes.string,
  top1film: PropTypes.string,
  top2film: PropTypes.string,
  top3film: PropTypes.string,
  top1serie: PropTypes.string,
  top2serie: PropTypes.string,
  top3serie: PropTypes.string,
};
OurMember.defaultProps = {
  memberName: '',
  memberPresentation: '',
  memberAvatar: '',
  memberMail: '',
  memberGithub: '',
  memberLinkedIn: '',
  top1film: '',
  top2film: '',
  top3film: '',
  top1serie: '',
  top2serie: '',
  top3serie: '',
};

export default OurMember;

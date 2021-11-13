import React from 'react';
import PropTypes from 'prop-types';
// import logoMail from '../assets/img/logMail.png';
// import logoLinkedin from '../assets/img/logLinkedin.png';
// import logoGithub from '../assets/img/logGithub.png';
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
    <div className="member">
      <div className="presentation">
        <h2>{memberName}</h2>
        <img src={memberAvatar} alt={memberName} />
        <p>{memberPresentation}</p>
      </div>
      <div className="top">
        <h2>Mon Top 3 films</h2>
        <figcaption>
          <h3 className="first">1</h3>
          <img src={top1film} alt={memberName} />
        </figcaption>
        <figcaption>
          <h3 className="second">2</h3>
          <img src={top2film} alt={memberName} />
        </figcaption>
        <figcaption>
          <h3 className="third">3</h3>
          <img src={top3film} alt={memberName} />
        </figcaption>
        <h2>Mon Top 3 séries</h2>
        <figcaption>
          <h3 className="first">1</h3>
          <img src={top1serie} alt={memberName} />
        </figcaption>
        <figcaption>
          <h3 className="second">2</h3>
          <img src={top2serie} alt={memberName} />
        </figcaption>
        <figcaption>
          <h3 className="third">3</h3>
          <img src={top3serie} alt={memberName} />
        </figcaption>
      </div>
      <div className="links">
        <h2>Mes liens</h2>
        <a href={memberMail} target="_blank" rel="noreferrer">
          {/* <img src='logoMail' alt="Icone Mail" className='icone' /> */}
        </a>
        <a href={memberGithub} target="_blank" rel="noreferrer">
          {/* <img src='logoGithub' alt="Icone Git Hub" className='icone' /> */}
        </a>
        <a href={memberLinkedIn} target="_blank" rel="noreferrer">
          {/* <img src='logoLinkedin' alt="Icone LinkedIn" className='icone' /> */}
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

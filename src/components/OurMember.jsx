import React from 'react';
import PropTypes from 'prop-types';
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
    <div>
      <div>
        <h2>{memberName}</h2>
        <img src={memberAvatar} alt={memberName} />
        <p>{memberPresentation}</p>
      </div>
      <div>
        <h3>Mon Top 3 films</h3>
        <img src={top1film} alt={memberName} />
        <img src={top2film} alt={memberName} />
        <img src={top3film} alt={memberName} />
        <h3>Mon Top 3 séries</h3>
        <img src={top1serie} alt={memberName} />
        <img src={top2serie} alt={memberName} />
        <img src={top3serie} alt={memberName} />
      </div>
      <div>
        <h3>Mes liens</h3>
        <p>{memberMail}</p>
        <p>{memberGithub}</p>
        <p>{memberLinkedIn}</p>
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

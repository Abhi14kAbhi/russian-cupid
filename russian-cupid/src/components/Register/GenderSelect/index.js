import React from 'react';
import {} from 'react-bootstrap';

import './styles.scss';
import man from '../../../common/images/man.png';
import woman from '../../../common/images/woman.png';
import greenCheck from '../../../common/images/green-check.png';

const GenderSelect = () => {
  return (
    <div className="genderMain">
      <p className="genderHeader">I'm a</p>
      <div className="genderBody">
        <div className="genderView">
          <img className="gender" src={man} alt="man" />
        </div>
        <div className="genderView">
          <img className="gender" src={woman} alt="woman" />
        </div>
      </div>
    </div>
  );
};

export default GenderSelect;

import React from 'react';
import {} from 'react-bootstrap';

import './styles.scss';
import man from '../../../common/images/man.png';
import woman from '../../../common/images/woman.png';
import greenCheck from '../../../common/images/green-check.png';

const GenderSelect = () => {
  return (
    <div>
      <div>I'm a</div>
      <div>
        <div>
          <img src={man} alt="man" />
        </div>
        <div>
          <img src={woman} alt="woman" />
        </div>
      </div>
    </div>
  );
};

export default GenderSelect;

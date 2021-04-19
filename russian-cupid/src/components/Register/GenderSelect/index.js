import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import man from '../../../common/images/man.png';
import woman from '../../../common/images/woman.png';
import greenCheck from '../../../common/images/green-check.png';

const GenderSelect = ({ onChange, keyName, value, label }) => {
  return (
    <div className="genderMain">
      <p className="genderHeader">{label}</p>
      <div className="genderBody">
        <div
          className="genderView"
          onClick={() => {
            onChange(keyName, 'MALE');
          }}
        >
          {value === 'MALE' && (
            <img className="greenCheck" src={greenCheck} alt="greenCheck" />
          )}
          <img
            className={value === 'MALE' ? 'focussedGender' : 'unfocussedGender'}
            src={man}
            alt="man"
          />
        </div>
        <div
          className="genderView"
          onClick={() => {
            onChange(keyName, 'FEMALE');
          }}
        >
          {value === 'FEMALE' && (
            <img className="greenCheck" src={greenCheck} alt="greenCheck" />
          )}
          <img
            className={
              value === 'FEMALE' ? 'focussedGender' : 'unfocussedGender'
            }
            src={woman}
            alt="woman"
          />
        </div>
      </div>
    </div>
  );
};

GenderSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  keyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default GenderSelect;

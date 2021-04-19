import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Form, FormLabel } from 'react-bootstrap';
import Svg from '../../../common/Svg';
import './styles.scss';

const TextInput = ({
  label,
  placeholder,
  type,
  onChange,
  keyName,
  value,
  error,
}) => {
  return (
    <InputGroup className="main">
      <FormLabel className="label">{label}</FormLabel>
      <div className="textInputView">
        <div className="svgStyle">
          <Svg svgName="name" />
        </div>
        <Form.Control
          className="textInput"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(keyName, e.target.value)}
        />
      </div>
      {error !== '' ? (
        <p className="errorTextInput">{error}</p>
      ) : (
        <div className="emptySpace" />
      )}
    </InputGroup>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  keyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default TextInput;

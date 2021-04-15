import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Form, FormLabel } from 'react-bootstrap';
import Svg from '../../../common/Svg';
import './styles.scss';

const TextInput = ({ label, placeholder, type }) => {
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
          onChange={(e) => console.log(e)}
        />
      </div>
    </InputGroup>
  );
};

export default TextInput;

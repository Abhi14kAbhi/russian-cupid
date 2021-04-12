import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Row, Col, Form } from 'react-bootstrap';

const TextInput = () => {
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Placeholder"
        onChange={(e) => console.log(e)}
      />
    </InputGroup>
  );
};

export default TextInput;

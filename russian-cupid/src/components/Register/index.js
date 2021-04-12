import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';
import TextInput from '../common/TextInput';

const Register = () => {
  const [userDetails, setUserdetails] = useState({});
  return (
    <Container>
      <Form>
        <Row>
          <Col>Register</Col>
        </Row>
        <Row>
          <Col>
            <TextInput />
          </Col>
          <Col>
            <TextInput />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;

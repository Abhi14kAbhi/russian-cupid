import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';
import TextInput from '../common/TextInput';

const Register = ({ registerUser }) => {
  return (
    <Container>
      <Button
        onClick={() =>
          registerUser({
            firstName: 'Abhishek',
            lastName: 'Shah',
            age: 23,
            email: 'abhishah0701@gmail.com',
            password: 'abhishek',
            gender: 'MALE',
            partnerGender: 'FEMALE',
          })
        }
      >
        Submit
      </Button>
    </Container>
  );
};

export default Register;

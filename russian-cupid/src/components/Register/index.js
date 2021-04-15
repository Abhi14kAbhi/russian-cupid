import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Row, Col } from 'react-bootstrap';
import TextInput from '../common/TextInput';
import DropdownSelect from '../common/DropdownSelect';
import './styles.scss';
import GenderSelect from './GenderSelect';

const Register = ({ registerUser }) => {
  return (
    <Container className="mainContainer">
      <Row className="headerRow">
        <Col className="headerText">Register</Col>
      </Row>
      <Row className="width100">
        <Col xs={6}>
          <TextInput label="First Name" placeholder="First Name" type="text" />
        </Col>
        <Col xs={6}>
          <TextInput label="Last Name" placeholder="Last Name" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <GenderSelect />
        </Col>
        <Col>
          <GenderSelect />
        </Col>
        <Col>
          <DropdownSelect list={[1, 2, 3, 4, 5]} />
        </Col>
      </Row>
      <Row className="width100">
        <Col>
          <TextInput label="Email Id" placeholder="Email Id" type="text" />
        </Col>
        <Col>
          <TextInput label="Password" placeholder="Password" type="password" />
        </Col>
      </Row>
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

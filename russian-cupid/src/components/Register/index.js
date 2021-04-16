import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Row, Col } from 'react-bootstrap';
import TextInput from '../common/TextInput';
import DropdownSelect from '../common/DropdownSelect';
import './styles.scss';
import GenderSelect from './GenderSelect';

const Register = ({ registerUser }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: 'MALE',
    partnerGender: 'FEMALE',
    age: 23,
    email: '',
    password: '',
  });
  return (
    <Container className="mainContainer">
      <Row className="headerRow">
        <Col className="headerText">Register</Col>
      </Row>
      <Row style={{ marginBottom: 20 }} className="width100">
        <Col xs={6}>
          <TextInput label="First Name" placeholder="First Name" type="text" />
        </Col>
        <Col xs={6}>
          <TextInput label="Last Name" placeholder="Last Name" type="text" />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }} xs={12} className="genderRow">
        <Col xs={3}>
          <GenderSelect />
        </Col>
        <Col xs={3}>
          <GenderSelect />
        </Col>
        <Col xs={3} className="dropdownStyle">
          <DropdownSelect list={[1, 2, 3, 4, 5]} />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }} xs={12} className="width100">
        <Col xs={6}>
          <TextInput label="Email Id" placeholder="Email Id" type="text" />
        </Col>
        <Col xs={6}>
          <TextInput label="Password" placeholder="Password" type="password" />
        </Col>
      </Row>
      <Button onClick={() => registerUser(user)}>Submit</Button>
    </Container>
  );
};

export default Register;

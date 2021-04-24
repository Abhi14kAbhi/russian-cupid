import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextInput from '../common/TextInput';
import DropdownSelect from '../common/DropdownSelect';
import HeaderContainer from '../../containers/HeaderContainer';
import './styles.scss';

import GenderSelect from './GenderSelect';

const Register = ({ registerUser, userRegistered, errorObj }) => {
  const [user, setUser] = useState({
    firstName: 'Abhi',
    lastName: 'Shah',
    gender: 'MALE',
    partnerGender: 'FEMALE',
    age: 23,
    email: 'abhishek@gmail.com',
    password: '12345678',
  });
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const onChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const onSubmit = (data) => {
    let errorExists = false;
    const errorObject = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data.firstName === '') {
      errorExists = true;
      errorObject.firstName = 'Required';
    }
    if (data.lastName === '') {
      errorExists = true;
      errorObject.lastName = 'Required';
    }
    if (data.email === '') {
      errorExists = true;
      errorObject.email = 'Required';
    } else if (!emailRegex.test(data.email)) {
      errorExists = true;
      errorObject.email = 'Email format is not correct';
    }

    if (data.password === '') {
      errorExists = true;
      errorObject.password = 'Required';
    } else if (data.password.length < 8) {
      errorExists = true;
      errorObject.password =
        'Password length should be greater than or equal to 8 characters';
    }
    setError(errorObject);
    if (!errorExists) {
      registerUser(data);
    }
  };
  return (
    <div>
      <HeaderContainer />
      <Container className="mainContainer">
        <Row className="headerRow">
          <Col className="headerText">Register</Col>
        </Row>
        <Row className="width100">
          <Col xs={6}>
            <TextInput
              label="First Name"
              placeholder="First Name"
              type="text"
              onChange={onChange}
              keyName="firstName"
              value={user.firstName}
              error={error.firstName}
            />
          </Col>
          <Col xs={6}>
            <TextInput
              label="Last Name"
              placeholder="Last Name"
              type="text"
              onChange={onChange}
              keyName="lastName"
              value={user.lastName}
              error={error.lastName}
            />
          </Col>
        </Row>
        <Row xs={12} className="genderRow">
          <Col xs={3}>
            <GenderSelect
              label="I'm a"
              onChange={onChange}
              keyName="gender"
              value={user.gender}
            />
          </Col>
          <Col xs={3}>
            <GenderSelect
              label="Looking for"
              onChange={onChange}
              keyName="partnerGender"
              value={user.partnerGender}
            />
          </Col>
          <Col xs={3} className="dropdownStyle">
            <DropdownSelect
              list={[
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
              ]}
              onChange={onChange}
              keyName="age"
              value={user.age}
            />
          </Col>
        </Row>
        <Row xs={12} className="width100 headerRow">
          <Col xs={6}>
            <TextInput
              label="Email Id"
              placeholder="Email Id"
              type="text"
              onChange={onChange}
              keyName="email"
              value={user.email}
              error={error.email}
            />
          </Col>
          <Col xs={6}>
            <TextInput
              label="Password"
              placeholder="Password"
              type="password"
              onChange={onChange}
              keyName="password"
              value={user.password}
              error={error.password}
            />
          </Col>
        </Row>
        {userRegistered ? (
          <p className="registerSuccess">Please check your mail to login</p>
        ) : (
          <p />
        )}
        {errorObj && !userRegistered ? (
          <p className="registerError">{errorObj.description}</p>
        ) : (
          <p />
        )}
        <Button className="registerButton" onClick={() => onSubmit(user)}>
          Submit
        </Button>
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </Container>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func,
  userRegistered: PropTypes.object,
  errorObj: PropTypes.object,
};

export default Register;

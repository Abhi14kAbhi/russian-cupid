import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { Row, Container, Col, Button } from 'react-bootstrap';
import HeaderContainer from '../../containers/HeaderContainer';
import TextInput from '../common/TextInput';

const Login = ({ loginUser, userData, errorObj }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: 'abhishah0701@gmail.com',
    password: 'Click@123',
  });
  const [error, setError] = useState({ email: '', password: '' });
  const onChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const onSubmit = (data) => {
    let errorExists = false;
    const errorObject = {
      email: '',
      password: '',
    };
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      errorObject.password = 'Password length less than 8 characters';
    }
    setError(errorObject);
    if (!errorExists) {
      loginUser(data);
    }
  };
  if (userData !== null) {
    history.push('/');
  }
  return (
    <div>
      <HeaderContainer />
      <Container className="loginContainer">
        <Row className="headerLoginRow">
          <Col className="headerLoginText">Login</Col>
        </Row>
        <Row>
          <TextInput
            label="Email Id"
            placeholder="Email Id"
            type="text"
            onChange={onChange}
            keyName="email"
            value={user.email}
            error={error.email}
          />
        </Row>
        <Row>
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            onChange={onChange}
            keyName="password"
            value={user.password}
            error={error.password}
          />
        </Row>
        {errorObj ? (
          <p className="loginError">{errorObj.description}</p>
        ) : (
          <p />
        )}
        <Button className="loginButton" onClick={() => onSubmit(user)}>
          Submit
        </Button>
        <p>
          Create a new account <Link to="/register">Register</Link>
        </p>
      </Container>
    </div>
  );
};

export default Login;

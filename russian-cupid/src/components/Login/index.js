import React, { useState } from 'react';
import './styles.scss';
import { Row, Container, Col, Jumbotron } from 'react-bootstrap';
import TextInput from '../common/TextInput';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });

  return (
    <Container className="loginContainer">
      <Row>
        <Col>Login</Col>
      </Row>
      <Row>
        <TextInput />
      </Row>
      <Row>
        <TextInput />
      </Row>
    </Container>
  );
};

export default Login;

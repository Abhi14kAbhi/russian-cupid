import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { Row, Container, Col, Button } from 'react-bootstrap';
import HeaderContainer from '../../containers/HeaderContainer';
import TextInput from '../common/TextInput';

const Home = ({ loginUser, userData, errorObj }) => {
  const history = useHistory();

  return (
    <div>
      <HeaderContainer />
      <Container>hi</Container>
    </div>
  );
};

export default Home;

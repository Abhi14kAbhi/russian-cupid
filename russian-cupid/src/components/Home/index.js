import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { Row, Container, Col, Button } from 'react-bootstrap';
import HeaderContainer from '../../containers/HeaderContainer';
import ProfileList from './ProfileList';
import Search from './Search';
import BasicDetails from './BasicDetails';

const Home = ({
  userData,
  countries,
  header,
  profiles,
  getUserDetails,
  getCountries,
  getHeader,
  getProfiles,
}) => {
  const history = useHistory();

  useEffect(() => {
    getUserDetails();
    getCountries();
    getHeader();
    getProfiles();
  }, []);

  return (
    <div>
      <HeaderContainer />
      <Container>
        {userData && header && <BasicDetails userData={userData} />}
        {countries.length > 0 && <Search countries={countries} />}
        {profiles.allUsers && <ProfileList profiles={profiles} />}
      </Container>
    </div>
  );
};

export default Home;

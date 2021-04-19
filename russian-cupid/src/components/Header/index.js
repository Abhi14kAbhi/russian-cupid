import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Image } from 'react-bootstrap';
import logo from './logo.png';
import './styles.scss';

const Header = ({ user }) => {
  return (
    <Navbar style={{ backgroundColor: 'black' }}>
      <Link to="/" className="link">
        <Image className="image" src={logo} alt="Russian Cupid" />
      </Link>
    </Navbar>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;

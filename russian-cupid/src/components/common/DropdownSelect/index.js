import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './styles.scss';

const DropdownSelect = ({ list }) => {
  const dropdownItems = list.map((item) => {
    return <Dropdown.Item>{item}</Dropdown.Item>;
  });
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">Age</Dropdown.Toggle>
      <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSelect;

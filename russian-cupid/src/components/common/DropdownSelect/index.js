import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './styles.scss';

const DropdownSelect = ({ list }) => {
  const dropdownItems = list.map((item) => {
    return <Dropdown.Item>{item}</Dropdown.Item>;
  });
  return (
    <Dropdown className="dropdownMain">
      <Dropdown.Toggle className="dropdownToggle">Age | 25</Dropdown.Toggle>
      <Dropdown.Menu className="dropdownMenu">{dropdownItems}</Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSelect;

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

import './styles.scss';

const DropdownSelect = ({ list, onChange, keyName, value }) => {
  const dropdownItems = list.map((item) => {
    return <Dropdown.Item>{item}</Dropdown.Item>;
  });
  return (
    <Dropdown className="dropdownMain">
      <Dropdown.Toggle className="dropdownToggle">
        Age | {value}
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdownMenu"
        onClick={(e) => {
          onChange(keyName, parseInt(e.target.outerText));
        }}
      >
        {dropdownItems}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownSelect.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  keyName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default DropdownSelect;

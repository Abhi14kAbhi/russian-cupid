import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import ToDo from './ToDo';

const ToDoList = ({ toDoList }) => {
  return (
    <Jumbotron>
      <ListGroup>
        {toDoList.map((item, index) => {
          return <ToDo {...item} key={index} />;
        })}
      </ListGroup>
    </Jumbotron>
  );
};

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ToDoList;

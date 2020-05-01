import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './ToDo';

const ToDoList = ({ toDoList }) => (
  <Jumbotron>
    <ListGroup>
       {toDoList.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))} 
    </ListGroup>
  </Jumbotron>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;
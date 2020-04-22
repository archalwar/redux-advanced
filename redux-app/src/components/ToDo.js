import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

const ToDo = ({ title, completed }) => (
  <ListGroup.Item>
    {title}
    {" "}    
    {completed === true ? "(Completed)" : "(Not Completed)"}
  </ListGroup.Item>
);

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToDo;
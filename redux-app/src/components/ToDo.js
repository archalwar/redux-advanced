import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const ToDo = ({ title, completed }) => (
  <ReactCSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <ListGroup.Item>
      {title} {/* {completed === true ? "(Completed)" : "(Not Completed)"} */}
    </ListGroup.Item>
  </ReactCSSTransitionGroup>
);

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToDo;

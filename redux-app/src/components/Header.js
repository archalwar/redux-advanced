import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Header = ({ description }) => 
<ReactCSSTransitionGroup transitionName = "example"
transitionAppear = {true} transitionAppearTimeout = {500}
transitionEnter = {false} transitionLeave = {false}>
  <h1>{description}</h1>
  </ReactCSSTransitionGroup>
;

Header.propTypes = {
  description: PropTypes.string.isRequired
};

export default Header;
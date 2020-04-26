import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="navigation">
    <Link className="btn btn-primary" to="/">
      View To Do List Items
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
       Add and View New To Do List Item
    </Link>
  </div>
);
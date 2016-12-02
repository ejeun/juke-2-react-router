import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div>
      <h3>404 Page not found</h3>
      <p>This is why we can't have nice things</p>
      <Link to='/albums'>Take me back where I belong!</Link>
    </div>
  );
}

export default NotFound;

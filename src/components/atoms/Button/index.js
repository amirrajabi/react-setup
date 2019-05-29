import React from 'react';
import { Link } from '@reach/router';

const Button = props => {
  const { children, to } = props;
  return (
    <Link to={to}>
      {children}
    </Link>
  );
}

export default Button;

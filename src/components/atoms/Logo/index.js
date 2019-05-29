import React from 'react';
import { Link } from '@reach/router';

const cdnLogo = `${process.env.CDN}/marketing-global/logos/pb-icon-dark.svg`;

const Logo = () => (
  <Link to="/">
    <img height="22px" alt="Logo" src={cdnLogo} />
  </Link>
);

export default Logo;

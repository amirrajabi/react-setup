import React from 'react';

import { Logo } from '../../atoms';

const Hero = ({
  children
}) => (
    <div className="">
      <Logo />
      {children}
    </div>
  );

export default Hero;

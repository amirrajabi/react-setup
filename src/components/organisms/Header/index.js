import React, { Fragment } from 'react';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => (
  <Fragment>
    <div className='hidden-xs hidden-sm'>
      <Desktop />
    </div>
    <div className='hidden-md hidden-lg'>
      <Mobile />
    </div>
  </Fragment>
);

export default Header;

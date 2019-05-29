import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({
  title,
  description,
  helmet
}) => (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>
      {helmet}
    </Fragment>
  );

export default Layout;

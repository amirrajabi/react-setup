import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../../atoms';
import { Hero } from '../../molecules';
import {
  Header
} from '../../organisms';
import Layout from '../Layout';

const Home = () => (
  <Layout>
    <Header>
      <Hero>
        <Button></Button>
      </Hero>
    </Header>
  </Layout>
);

export default connect(
  null,
  null
)(Home);

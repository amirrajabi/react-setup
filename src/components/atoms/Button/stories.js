import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Button from './';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

stories.add('Button', () => {
  const buttonColor = select('Colors', {
    None: null,
    Jade: 'jade',
    Plum: 'plum',
    Aubergene: 'aubergene',
    Honey: 'honey',
    Cherry: 'cherry',
    Orange: 'orange',
    Sea: 'sea',
    Indigo: 'indigo'
  });
  const buttonText = text('Button Text', 'Button');

  return <Button color={buttonColor}>{buttonText}</Button>
});

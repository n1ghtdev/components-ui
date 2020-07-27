import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './button';

export const children = 'Hello World!';
export const onClickProp = action('onClick');

storiesOf('Button', module).add(
  'Button Custom',
  withInfo(``)(() => (
    <Button theme="custom" onClick={onClickProp}>
      {children}
    </Button>
  )),
);

storiesOf('Button', module).add('Button Success', () => (
  <Button theme="success" onClick={onClickProp}>
    {children}
  </Button>
));

storiesOf('Button', module).add('Button Warning', () => (
  <Button theme="warning" onClick={onClickProp}>
    {children}
  </Button>
));

storiesOf('Button', module).add('Button Error', () => (
  <Button theme="error" onClick={onClickProp}>
    {children}
  </Button>
));

storiesOf('Button', module).add('Button Info', () => (
  <Button theme="info" onClick={onClickProp}>
    {children}
  </Button>
));

storiesOf('Button', module).add('Button Anchor', () => (
  <Button theme="success" href="#">
    {children}
  </Button>
));

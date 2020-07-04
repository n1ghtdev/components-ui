import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

export const textProp = 'Hello World!';
export const onClickProp = action('onClick');

storiesOf('Button', module)
  .add('default', () => <Button text={textProp} onClick={onClickProp} />);
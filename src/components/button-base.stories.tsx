import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonBase from './button-base';

export const textProp = 'Hello World!';
export const onClickProp = action('onClick');

storiesOf('ButtonBase', module).add('default', () => (
  <ButtonBase onClick={onClickProp}>{textProp}</ButtonBase>
));

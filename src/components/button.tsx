import React from 'react';
import ButtonBase from './button-base';

export interface Button {
  children: string | React.ReactNode;
  theme: 'success' | 'warning' | 'error' | 'info' | 'custom';
  [key: string]: any;
}

export default function Button(props: Button) {
  const { children, ...rest } = props;
  return <ButtonBase {...rest}>{children}</ButtonBase>;
}

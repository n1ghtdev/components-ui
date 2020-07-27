import React from 'react';

export interface ButtonBase {
  children: string | React.ReactNode;
  [key: string]: any;
}

export default function ButtonBase(props: ButtonBase) {
  const { children, ...rest } = props;
  if (props.href) {
    return <a {...rest}>{children}</a>;
  }
  return <button {...rest}>{children}</button>;
}

import React from 'react';

export interface Button {
  text: string | React.ReactNode;
  onClick: Function;
}

export default function Button({ text, onClick }: Button) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}
import * as React from 'react';

declare module 'react' {
  interface Attributes {
    [key: string]: any;
  }

  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}

export = React;
export as namespace React;
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }

  interface Window {
    addEventListener(type: 'rides:updated' | 'nav:rides', listener: () => void): void;
    removeEventListener(type: 'rides:updated' | 'nav:rides', listener: () => void): void;
  }
}

export {};
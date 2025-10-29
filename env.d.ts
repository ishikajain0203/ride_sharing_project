/// <reference types="vite/client" />

declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'react-dom/client';
declare module 'react/jsx-runtime';

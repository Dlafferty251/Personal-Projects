// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Styles are optional, but useful
import { Game } from './game'; // Make sure this path is correct!

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);


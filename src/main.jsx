// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Game from './pages/Game/Game';
import NoPage from './pages/NoPage/NoPage';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
  </React.StrictMode>,
);
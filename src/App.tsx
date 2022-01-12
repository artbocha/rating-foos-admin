import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Players from './pages/Players';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="players" element={<Players />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

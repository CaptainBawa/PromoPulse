import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './LandingPage';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

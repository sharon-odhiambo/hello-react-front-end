import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Greeting />
      <Routes>
        <Route path="/Greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

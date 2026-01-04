import React from 'react';
import Dahbord from './pages/dashboard/Dahbord';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dahbord />} />
      </Routes>
    </Router>
  );
}

export default App;

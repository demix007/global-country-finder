import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body/Body';
import Country from './components/Country/Country';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/countries/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

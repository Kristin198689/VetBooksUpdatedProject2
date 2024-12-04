import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VetBooks from './pages/VetBooks';
import NoBooks from './pages/NoBooks';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main/vetbooks" element={<VetBooks />} />
        <Route path="/main/vetbooks/empty" element={<NoBooks />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './pages/HomePage.css'; 

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <nav className="centered-nav">
        <ul className="nav-list">
          <li>
            <button onClick={() => setPage('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage('about')}>About</button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;

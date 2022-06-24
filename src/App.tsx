import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home';
import About from './Containers/About';
import Contact from './Containers/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ padding: '10px', textAlign: 'center' }}>
          It looks so gooooood!
        </p>
      </header>
      <body>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;

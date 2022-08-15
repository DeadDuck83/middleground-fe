import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Containers/Home';
import About from './Containers/About';
import Contact from './Containers/Contact';
import CreateEvent from 'Containers/CreateEvent';
import 'index.css';

function App() {
  return (
    <div className="App">
      <body>
        <Router>
          <Routes>
            <Route path="/" element={<CreateEvent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/create" element={} /> */}
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;

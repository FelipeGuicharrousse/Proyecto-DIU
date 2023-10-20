import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home.js';
import Form from './views/form.js';
import News from './views/news.js';
import WithAction from './components/withAction.js';

function App() {
  return (
    <Router>
      <div>
        <WithAction />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Form />} />
            <Route path="/news" element={<News />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

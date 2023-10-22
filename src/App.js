import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home.js';
import Form from './views/form.js';
import News from './views/news.js';
import NewsExample from './views/news1.js';
import Publications from './views/publications.js'
import Salud from './views/salud.js';
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
            <Route path="/news/example" element={<NewsExample />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/health" element={<Salud />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

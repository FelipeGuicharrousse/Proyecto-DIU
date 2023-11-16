import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home.js';
import AboutUs from './views/aboutUs.js';
import SignIn from './views/singIn';
import News from './views/news.js';
import NewsExample from './views/news1.js';
import Publications from './views/publications.js'
import Salud from './views/salud.js';
import WithAction from './components/withAction.js';
import GoodResult from './views/goodResult';
import BadResult from './views/badResult';
import UndefinedResult from './views/undefinedResult';
import SchedulesView from './views/schedulesView.js';
import SignupCard from './views/formAdministration.js';
import SplitScreen from './views/administration.js';
import StudentList from './views/studentList.js';

function App() {
  return (
    <Router>
      <div>
        <WithAction />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/becas/202073555-7" element={<GoodResult />} />
            <Route path="/becas/good" element={<GoodResult />} />
            <Route path="/becas/bad" element={<BadResult />} />
            <Route path="/becas/undefined" element={<UndefinedResult />} />
            <Route path="/health" element={<Salud />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/example" element={<NewsExample />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/schedules" element={<SchedulesView />} />
            <Route path="/administration" element={<SignupCard />} />
            <Route path="/administrationHome" element={<SplitScreen />} />
            <Route path="/students" element={<StudentList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

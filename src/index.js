import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Tech from './Pages/Tech';
import Navbar from './Layout/Navbar';
import Topic from './Pages/Topic';
import Auth from './Pages/Auth';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/:title" element={<Tech />}>
        "
      </Route>
      <Route path="/:title/:topic" element={<Topic />}>
        "
      </Route>
      <Route path="/Auth" element={<Auth />}>
        "
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

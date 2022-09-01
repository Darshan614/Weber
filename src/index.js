import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Tech from './Pages/Tech';
import Navbar from './Layout/Navbar';
import Topic from './Pages/Topic';
import Auth from './Pages/Auth';
import MyAnswers from './Pages/MyAnswers';
import MyQuestions from './Pages/MyQuestions';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
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
        <Route path="/Answers" element={<MyAnswers />}>
          "
        </Route>
        <Route path="/Questions" element={<MyQuestions />}>
          "
        </Route>
      </Routes>
    </Router>
  </AuthContextProvider>,
  document.getElementById('root')
);

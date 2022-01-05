import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Welcome } from './pages/welcome';
import { ContactButton } from './components/contact_button';
import { Photographer } from './pages/photographer';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path="/" element={<Welcome/>}></Route>
            
          <Route path="/profile/:id"
          //render={(props) => <Photographer {...props} />}
          element={<Photographer/>}
          />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

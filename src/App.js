import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Timer from "./features/Timer/Timer";


function App() {
  return (
    <div>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
        </header>
      </div>
      <Routes>
            <Route path="/timer" component= {Timer}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import { Timer } from './features/Timer/Timer';
import {useSelector, useDispatch} from "react-redux"




function App() {
  return (
    <div>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Timer/>
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

import React from 'react';
import './App.css';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import { Timer } from './features/Timer/Timer';
import {Navigation} from "./features/Navigation/Navigation";
import {ExerciseList} from "./features/Exercises/ExerciseList";





function App() {
  return (
    <div>
    
 
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
       {/* <Navigation/> */}
       <ExerciseList/>
        </header>
        
      </div>
      
      <Routes>
            <Route path="/timer" component= {Timer}/>
            <Route path="/exerciseList" component= {ExerciseList}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

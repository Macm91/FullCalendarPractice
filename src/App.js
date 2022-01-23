import React from 'react';
import './App.css';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import { Timer } from './features/Timer/Timer';
import Nativation, {Navigation} from "./features/Navigation/Navigation";
import {ExerciseList} from "./features/Exercises/ExerciseList";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {store} from "./app/store";




function App() {
  return (

    <Provider store={store}>
        <NavigationContainer>
          <Nativation/>
        </NavigationContainer>
    </Provider>

    // <div> 
    // <BrowserRouter>
    //   <div className="App">
    //     <header className="App-header">
       
    //     </header>
        
    //   </div>
      
    //   <Routes>
    //         <Route path="/timer" component= {Timer}/>
    //         <Route path="/exerciseList" component= {ExerciseList}/>
    //   </Routes>
    // </BrowserRouter>
    // </div>
  );
}

export default App;

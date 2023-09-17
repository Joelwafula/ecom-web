import HomePage from './pages/homePage';
import './App.css';
import {Switch,Route} from "react-router-dom"

import React from 'react'

export const HatsPage = () => {
  return (
    <div>HatsPage</div>
  )
}


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        </Switch>
      

     
    
    </div>
  );
}

export default App;

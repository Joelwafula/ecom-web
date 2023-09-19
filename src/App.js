import HomePage from './pages/homePage';
import './App.css';
import {Route,Routes} from "react-router-dom"
import ShopPage from './shop/ShopPage'

import React from 'react'




function App() {
  return (
    <div >
      <Routes>
      
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        </Routes>
        
      

     
    
    </div>
  );
}

export default App;

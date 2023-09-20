import HomePage from './pages/homePage';
import React from 'react'
import './App.css';
import {Route,Routes} from "react-router-dom"
import ShopPage from './shop/ShopPage'
import Header from './component/header/header';
import SignIn_signUp_page from './component/sign-in_sign-up/signIn_signUp';

function App() {
  return (
    <div >
       
      <Header/>
     
      <Routes>
      
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignIn_signUp_page/>}/>
        </Routes>
        
      

     
    
    </div>
  );
}

export default App;

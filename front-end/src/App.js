import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gain from './components/Gain';
import Loss from './components/Loss';
import Picture from './components/Picture';
import Bmi from './components/Bmi';
import Contact from './components/Contact';
import Login from './components/Login';
import Fetch from './components/Fetch';
import Update from './components/Update';
import Signup from './components/Signup';
import Private from './components/Private';
function App(props) {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<Private/>}>
              <Route path="/fetch" element={<Fetch/>}></Route>
              <Route path="/update/:id" element={<Update/>}></Route>
          </Route>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/gain' element={<Gain/>}></Route>
     <Route path='/loss' element={<Loss/>}></Route>
     <Route path='/picture' element={<Picture/>}></Route>
     <Route path='/bmi' element={<Bmi/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
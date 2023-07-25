
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Component imports
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import News from './pages/News/News'
import Login from './pages/Login/Login'


const App =()=>{

  return (<div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
}


export default App;
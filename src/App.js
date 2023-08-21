
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Component imports
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import News from './pages/News/News'
import Login from './pages/Login/Login'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import Account from './pages/Account/Account'
import AuthContextProvider from './components/Authentication/AuthContext'

const App =()=>{

  return (<div>
    <AuthContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  </div>)
}


export default App;
import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Logingit  from './pages/Login.jsx'
// import Register from './pages/Register'


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </>
  )
}

export default App

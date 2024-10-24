import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mynavbar from '../components/corporate/navbar/Mynavbar'
import Adminlogin from '../components/Admin/Adminlogin'
import Admin from '../components/Admin/Admin'
import Recommendation from '../components/recommendation/Recommendation'
const Routing = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/About' element={<Mynavbar/>}/>
        <Route path='/' element={<Adminlogin/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Reco' element={<Recommendation/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Sidebar from '../Components/Sidebar/Sidebar'
import SidebarLayout from '../Components/Sidebar/SidebarLayout'

function RoutesLayout() {
  return (
    <div className="md:flex">
      <SidebarLayout/>
      <div className="md:flex-1 md:ml-[100px]">
      <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
      </div>
    </div>
  )
}

export default RoutesLayout
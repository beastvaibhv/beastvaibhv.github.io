import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  
  return (
    <div className='flex'>
      <div className='w-1/8 '>
        <Sidebar/>
      </div>
      <div className='w-7/8'> 
        <Outlet/>
      </div>
           
    </div>
  )
}

export default Body

import React from 'react';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isSidebarOpen = useSelector(store =>store.toggle.isSidebarOpen)
  if (!isSidebarOpen) return null;
  return (
    <div>
      <div className='w-48 font-normal font-sans text-x  pt-1 m-1 h-screen overflow-y-scroll bg-white'>
      <div className=''>
        <ul className='py-1 shadow-sm cursor-pointer '>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>
            <Link to="/">
            Home </Link></li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Shorts</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Subscriptions</li>

        </ul>
        <ul className='py-2 shadow-sm cursor-pointer'>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Library</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>History</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Your Videos</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Watch Later</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Liked Videos</li>
        </ul>
        <h2 className='flex justify-center font-bold py-1'>Explore</h2>
        <ul className='py-1 shadow-sm cursor-pointer'>
          
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Shopping</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Music</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Movies & Shows</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Live</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Gaming</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>News</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Sports</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Learning</li>
          <li className=' flex justify-center border border-hidden h-8 rounded-s-3xl rounded-e-3xl hover:bg-gray-200'>Fashion & Beauty</li>

        </ul>
        
      </div>
      <div>
        <Footer/>
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar

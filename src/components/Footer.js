import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='text-xs font-light flex flex-wrap py-2'>
      <button className='px-1'>About</button> 
      <button className='px-1'>Press</button>
      <button className='px-1'>Copyright</button>
      <button className='px-1'>Contact Us</button>
      <button className='px-1'>Creators</button>
      <button className='px-1'>Advertise</button>
      <button className='px-1'>Developers</button>
    </div>
    <div className='text-xs font-light flex flex-wrap py-2'>
    <button className='px-1'>Terms</button> 
    <button className='px-1'>Privacy</button>
    <button className='px-1'>Policy & Safety</button>
    <button className='px-1'>How YouTube Works</button>
    <button className='px-1'>Test New Features</button>
    
  </div>
  <div>
    <button><p className='text-zinc-400 text-xs'>Copyright Google LLC</p></button>
  </div>
  </>
  )
}

export default Footer

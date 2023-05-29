import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='m-4 '>
       <div className="w-72  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
            <div className=" bg-gray-300 h-40 rounded-md">

            </div>
           <div className="ml-10 my-2 mr-5">
           <div className=" bg-gray-300 h-4 w-full mb-2"></div>
           <div className=" bg-gray-300 h-3 w-1/2"></div>
           </div>
        </div>
    </div>
  )
}

export default ShimmerCard

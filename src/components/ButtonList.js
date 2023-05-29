import { useState } from "react";

import { buttons } from "../utils/constant";


const ButtonList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };


  return (
   <div className="font-sans text-center  flex items-center justify-center max-w-screen-lg">
    <div className=" max-w-screen-lg overflow-x-scroll scrollbar-transparent flex items-center space-x-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
         
          className={`${
            activeIndex === index
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-500 hover:text-gray-700'
          } focus:outline-none pb-2 transition duration-300 `}
        >
          {button}
        </button>
      ))}
      
    </div>
    </div>
  );
};

export default ButtonList;
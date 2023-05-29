import { useState, useRef } from "react";
import gsap from "gsap";
import Button from "./Buttton";
import { buttons } from "../utils/constant";


const ButtonScroll =() => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="flex ms-4 ">
    
        <div>
            {scrollX !== 0 && (
            <button
              className="text-xl font-bold items-center my-3"
              onClick={() => slide(-80)}
            >
             &lt;
            </button>
        
             )}
        </div>
        <div className="font-sans text-center  flex items-center justify-center max-w-[950px]">
          <ul className = " flex items-center max-w-full overflow-x-scroll  scrollbar-transparent  scroll-smooth " ref={scrl} onScroll={scrollCheck}>
           {buttons.map((d, i) => (
             <li className="p-0.5" key={i}><Button name={d}  /></li>
            ))}
          </ul>
        </div>
        <div className="">
          {!scrolEnd && (
            <button
            className="text-xl font-bold items-center my-3"
            onClick={() => slide(+80)}
          
            >
              &gt;
             </button>
            )}
        </div>
    </div>
    
  );
}

export default ButtonScroll;
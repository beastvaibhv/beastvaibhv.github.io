import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/ToggleSlice';;

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    

    useEffect(()=>{
        dispatch(closeMenu())
        
    },[])
    
    
  return (
    <div >
        <div className='ml-16 my-5'>
            <iframe 
      width="650" height="400" 
      src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
      title="YouTube video player" 
      
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen>

       </iframe></div>
      
    </div>
  )
}

export default WatchPage

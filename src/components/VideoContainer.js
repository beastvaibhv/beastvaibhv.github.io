import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerCard from './ShimmerCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( ()=>
  {
    getVideoData()
   

  },[]);

  const getVideoData= async()=>{
    const data = await fetch(YOUTUBE_API);
    const JSON = await data?.json();
    setVideos(JSON.items)
    setLoading(false)
    
   }
  if (loading){
    return (<div className='flex flex-wrap'>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    </div> 
    );
  };
  return (
    <div className='flex flex-wrap '>
      {videos.map((video)=>
      
         <Link to={"watch?v="+ video.id} key={video.id} >
          <VideoCard info={video} />
          </Link>
      )}
     
      
    </div>
  );
};

export default VideoContainer

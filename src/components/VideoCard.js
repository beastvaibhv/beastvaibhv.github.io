function timeAgo(publishedDate) {
    const now = new Date();
    const published = new Date(publishedDate);
    const elapsed = now - published;
  
    if (elapsed < 1000) {
      return 'just now';
    } else if (elapsed < 60000) {
      return `${Math.floor(elapsed / 1000)} seconds ago`;
    } else if (elapsed < 3600000) {
      return `${Math.floor(elapsed / 60000)} minutes ago`;
    } else if (elapsed < 86400000) {
      return `${Math.floor(elapsed / 3600000)} hours ago`;
    } else if (elapsed < 604800000) {
      return `${Math.floor(elapsed / 86400000)} days ago`;
    } else if (elapsed < 2629800000) {
      return `${Math.floor(elapsed / 604800000)} weeks ago`;
    } else if (elapsed < 31557600000) {
      return `${Math.floor(elapsed / 2629800000)} months ago`;
    } else {
      return `${Math.floor(elapsed / 31557600000)} years ago`;
    }
  }
  
  
  
  
  
  
  
  

const VideoCard = ({info}) => {
    
   
    const {snippet,statistics} = info;
    const {thumbnails, title} = snippet;
  return (
    <div className='w-72 max-w-xs  rounded-md my-4 overflow-hidden mx-4 bg-white'>
        <div className='m-auto shadow-sm'>
            <img 
            className='rounded-md'
            src={thumbnails?.medium?.url} alt="thumbnail" />
        </div>

        <div >
            <div className='flex justify-start '>
                <div className='w-10 mx-1'>
                    <img 
                className='h-10  min-w-fit rounded-full m-auto'
                src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="logo" />
                </div>
                <div className="ml-2 max-w-[240px] tracking-wide text-sm text-black font-semibold leading-7 mb-2 truncate">
                    {title}
                </div>
            </div>
            <div className='text-gray-500 text-sm ms-11'>
                {snippet?.channelTitle}
            </div>
            <div className=''>
                 <div className="text-gray-500 text-sm ms-11">{statistics?.viewCount} views • {timeAgo(snippet?.publishedAt)}</div>
            </div>
            
            

        </div>
        
      
    </div>
  );
};



  export default VideoCard;
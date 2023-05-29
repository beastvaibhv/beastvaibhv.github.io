const VideoCard2 = ({ info }) => {
    const {snippet,statistics} = info;
    const {thumbnails, title} = snippet;
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={thumbnails?.default?.url} alt={title} />
          </div>
          <div className="p-8">
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full mr-2" src="" alt={`${snippet?.channelTitle} logo`} />
              <div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                <div className="text-gray-500 text-sm">{snippet?.channelTitle}</div>
                <div className="text-gray-500 text-sm">{statistics?.viewCount} views • {snippet?.publishedAt}</div>
              </div>
            </div>
            <p className="mt-2 text-gray-500">hello let see what i do</p>
            <div className="mt-4">
              <a href="#" className="text-indigo-500 hover:text-indigo-600 font-semibold">Watch on YouTube</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default VideoCard2;
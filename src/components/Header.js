import React, { useEffect, useState } from 'react'
import { ProfileImageURL, YOUTUBE_SEARCH_API } from '../utils/constant';
import SearchSVG from '../utils/SVG/SearchSVG';
import YoutubeLogoSVG from '../utils/SVG/YoutubeLogoSVG';
import Hamburger from '../utils/SVG/Hamburger';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu, toggleMenu } from '../utils/ToggleSlice';
import { addToCache } from '../utils/QuerySlice';



const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [queryList, setQueryList] = useState([]);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
  const dispatch = useDispatch();
  const handleToggleMenu =()=>{
    dispatch(toggleMenu());
  }
  const queryCache =useSelector(store => store.query);
  useEffect(()=>{
    
    dispatch(openMenu)
  },[])

  useEffect(()=>{
  
  
    const timer = setTimeout(() => 
     {
      if (queryCache[searchText])
      {
        setQueryList(queryCache[searchText])
      }
      else
      {
        getSuggestions()
        
      }},200);
     
      return () =>{
           clearTimeout(timer);
            };
      },[searchText])



  const getSuggestions = async () => {
    
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const text = await data.text()
   
    const searchSuggestions = [];
    
    text.split('[').forEach((ele, index) => {
      if (!ele.split('"')[1] || index === 1 || index === text.split("[").length-1) return;
      return searchSuggestions.push(ele.split('"')[1]);
    });
   
    setQueryList(searchSuggestions);
    dispatch(addToCache({[searchText]:queryList}))
    
    
    
    
  };


  return (
    <>
      <div className='flex justify-between py-0.5 px-0.5 h-10 bg-white'>
       {/** hamburger **/}
       <div>
         <div className='flex '>
            <div className='w-7 m-0.5 mt-0.1 cursor-pointer'
            onClick={()=>{
              handleToggleMenu()
            }} >
              
                <Hamburger />
                
              
            </div>
            <div className='py-1.5 cursor-pointer '>
            <a href="/"><YoutubeLogoSVG/></a>
              {/** <img classname="h-4 w-2" src={YoutubeImageURL} alt="Logo" />*/}
              
            </div>
          </div>
        </div>

        {/**search bar */}
        <div>
        <div className=' relative ' 
        onFocus={()=>setIsSearchBarVisible(true)}
        onBlur={()=>setIsSearchBarVisible(false)}>
          <div className='flex'>
            <div >
              <input className='px-2 w-96 h-7 mt-1 border border-semisolid border-gray-300 rounded-s-full' type="text"
              value ={searchText}
              placeholder='Search'
               onChange = {(e)=>{
                   setSearchText(e.target.value)
              }}/>
            </div>
            <div className='cursor-pointer'>
              <button className='w-10 h-7 mt-1 border border-semisolid rounded-e-full border-gray-300 overflow-hidden hover:bg-blue-700 items-center'>
                <div className=' h-8 w-6 mb-2 ms-1'>
                  {/*<img src={SearchLogoURL}  alt="search svg" />*/}
                  <SearchSVG/> 
                  

                </div>
              </button>
            </div>
          </div>
          <div className='bg-white absolute  w-96 shadow-lg rounded-xl  '>
          { isSearchBarVisible && queryList.map((item,index)=> 
          <div className='hover:bg-slate-100'>
            <li className="list-none " key = {index}>
              <div className='flex'>
                <div className='h-4 w-3 m-1'><SearchSVG /></div>
                <div className='font-serif text-sm'>{item}</div>
              </div>
            </li>
          </div>)}
          </div>
        </div>
        </div>


        {/**sign up and profile */}

        <div>
          <div className='cursor-pointer'>
            <div className='w-8 px-1 mt-1'>
              <img src={ProfileImageURL} alt="profile logo" />
            </div>
          </div>
        </div>

      </div>
    
    </>
   
  )
}

export default Header;

import SearchBox2 from "./SearchBox2";
import TopSorting2 from "./TopSorting2";



const SearchBar = () => {
  
  return (

    
    <div className=" font-[sans] dark:bg-[#152a38]  w-full   flex flex-wrap bg-[#F3F4F6]">
      <div className=" bg-white w-[95%] flex justify-between h-24  m-auto rounded-2xl dark:bg-[#29435c]  mb-7 sm:flex-nowrap  ">
        {/* <div className=" flex items-center w-[100%] h-[90px]  bg-pink-300 rounded-md shadow-md font-bold "> */}
          {/* <div className=" bg-blue-300  flex items-center  mr-4 w-full h-[100%]  "> */}

        

          <div className=' bg-white w-[100%] h-24  max-lg:h-[70px] max-sm:h-[65px]  rounded-[20px] flex items-center md:max-lg:gap-0 gap-4 dark:bg-[#29435c]'>    
            <SearchBox2 />
            <TopSorting2 />
        
        </div>

            {/* <button className="  bg-white-500  text-gray-500 rounded-r-md p-2   ">
              <FaSearch className="dark:bg-white rounded-lg size-8 " />
            </button> */}
          {/* </div> */}

        <div>
      
        </div>
          


        {/* </div> */}
      </div>
    </div>
  );
};

export default SearchBar;

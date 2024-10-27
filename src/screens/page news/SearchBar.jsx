import SearchBox2 from "./SearchBox2";
import TopSorting2 from "./TopSorting2";



const SearchBar = () => {
  
  return (

    
    <div className=" text-{sans} dark:bg-[#041c3254]  w-full   flex flex-wrap bg-[#F3F4F6]">
      <div className="  w-[95%] h-28  m-auto rounded-lg bg-[#fff] mt-11 mb-7 sm:flex-nowrap  ">
        <div className="flex items-center h-full  bg-white-100 rounded-md shadow-md font-bold dark:bg-[#041c3294]    dark:text-slate-800">
          <div className="  flex items-center  mr-4 w-56 ">

        

          <div className='w-[100%] h-[90px] max-lg:h-[70px] max-sm:h-[65px] bg-white rounded-[20px] flex items-center mt-[10px] md:max-lg:gap-0 gap-4 dark:bg-[#29435c]'>    
            <SearchBox2 />
            <TopSorting2 />
        
        </div>

            {/* <button className="  bg-white-500  text-gray-500 rounded-r-md p-2   ">
              <FaSearch className="dark:bg-white rounded-lg size-8 " />
            </button> */}
          </div>

        <div>
      
        </div>
          


        </div>
      </div>
    </div>
  );
};

export default SearchBar;

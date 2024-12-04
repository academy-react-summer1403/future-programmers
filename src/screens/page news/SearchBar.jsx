import SearchBox2 from "./SearchBox2";
import TopSorting2 from "./TopSorting2";

const SearchBar = ({setSearch}) => {
  return (
    <div className=" font-[sans] dark:bg-[#152a38]  w-full flex flex-wrap bg-[#F3F4F6]">
      <div className="bg-white mt-9 w-[95%] m-auto h-24 max-lg:h-[70px] max-sm:h-[65px]  rounded-[20px] flex items-center md:max-lg:gap-0 gap-4 dark:bg-[#29435c]">
        <SearchBox2 setSearch={setSearch} />
        <TopSorting2 />
      </div>
    </div>
  );
};

export default SearchBar;

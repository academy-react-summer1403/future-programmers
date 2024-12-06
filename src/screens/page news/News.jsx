import SearchBar from './SearchBar'
import LineNews from './LineNews'
import CardNews from './CardNews'
import { useEffect, useState } from "react";
import { getCardNews } from "../../core/services/api/news";




const News = () => {
  const [cardNews, setCardNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [totalCount, setTotalCount] = useState()
  const [reFetch, setReFetch] = useState(1)


  // console.log(cardNews)
  const getAllCardNews = async (currentPage, search, sort) => {
    try {
      const result = await getCardNews(8, currentPage, search, sort);

      setCardNews(result.news);
      setTotalCount(result.totalCount)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCardNews(currentPage, search, sort);
  },[currentPage, search, sort,reFetch]);

  return (
    <div className='bg-[#F3F4F6]  dark:bg-[#152a38]'>
        <SearchBar setSearch={setSearch} setSort={setSort}/>
        <LineNews/>
        <CardNews cardNews={cardNews} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalCount} setReFetch={setReFetch}/>
    </div>
    
    


)
}














export default News

import SearchBar from './SearchBar'
import LineNews from './LineNews'
import CardNews from './CardNews'
import { useEffect, useState } from "react";
import { getCardNews } from "../../core/services/api/news";




const News = () => {
  const [cardNews, setCardNews] = useState([]);
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [reFetch, setReFetch] = useState(1)


  const getAllCardNews = async (search, sort) => {
    try {
      const result = await getCardNews(search, sort);

      setCardNews(result.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCardNews(search, sort);
  },[search, sort,reFetch]);

  return (
    <div className='bg-[#F3F4F6]  dark:bg-[#152a38]'>
        <SearchBar setSearch={setSearch} setSort={setSort}/>
        <LineNews/>
        <CardNews cardNews={cardNews} setReFetch={setReFetch}/>
    </div>
    
    


)
}














export default News

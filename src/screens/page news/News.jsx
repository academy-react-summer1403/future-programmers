import SearchBar from './SearchBar'
import LineNews from './LineNews'
import CardNews from './CardNews'
import { useEffect, useState } from "react";
import { getCardNews } from "../../core/services/api/news";




const News = () => {
  const [cardNews, setCardNews] = useState([]);
  const [search, setSearch] = useState('')


  const getAllCardNews = async (search) => {
    try {
      const result = await getCardNews(search);

      setCardNews(result.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCardNews(search);
  },[search]);

  return (
    <div className='bg-[#F3F4F6]  dark:bg-[#152a38]'>
        <SearchBar setSearch={setSearch}/>
        <LineNews/>
        <CardNews cardNews={cardNews}/>
    </div>
    
    


)
}














export default News

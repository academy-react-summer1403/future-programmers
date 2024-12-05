import React, { useEffect, useState } from "react";
import CustomCard from "../common/CustomCard";
import pic from "../../../../public/item1.png";
import { getFavoriteNews } from "../../../core/services/api/getFavoriteNews";
import NewsCard from "../common/NewsCard";

const FavoriteNews = () => {
  const [favNews, setFavNews] = useState([]);
  // console.log("aa", favNews);
  const getNews = async () => {
    const res = await getFavoriteNews();
   
    setFavNews(res.myFavoriteNews);
  };
  console.log(favNews)

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">
        {favNews?.map((item, index) => (
          <NewsCard 
            key={ index} 
            item={item}  />
        ))}
      </div>
    </div>
  );
};

export default FavoriteNews;

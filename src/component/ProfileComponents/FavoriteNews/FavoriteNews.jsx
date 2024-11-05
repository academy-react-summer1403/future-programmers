import React, { useEffect, useState } from "react";
import CustomCard from "../common/CustomCard";
import pic from "../../../../public/item1.png";
import { getFavoriteNews } from "../../../core/services/api/getFavoriteNews";
import NewsCard from "../common/NewsCard";

const FavoriteNews = () => {
  const [favNews, setFavNews] = useState([]);

  const getNews = async () => {
    const res = await getFavoriteNews();
    console.log(favNews);
    setFavNews(res.myFavoriteNews);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h2>اخبار مورد علاقه FavoriteNews</h2>
      <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">
        {favNews?.map((item, index) => (
          <NewsCard item={item} index={ index} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteNews;

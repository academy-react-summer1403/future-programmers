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
      <div className="mt-10 ">
        <div className="flex flex-wrap   h-[70px] border-4 border-dotted bg-white shadow-2xl  border-gray-300 mt-10 items-center">
          <span className="w-[35%] ms-20">عنوان </span>
          <span className="w-[25%]"> امتیاز</span>
          <span className="w-[20%]"> تعداد بازدید</span>
        </div>

        {favNews?.map((item, index) => (
          <NewsCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteNews;

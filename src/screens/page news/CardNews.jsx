import React, { useEffect, useState } from "react";
import { getCardNews } from "../../core/services/api/news";
import Page from "./Page";
import PictureBox from "./PictureBox";
import CardPage2 from "./CardPage2";
import pic from "../../../public/newspaper.png";

const CardNews = () => {
  const [cardNews, setCardNews] = useState([]);
  console.log(cardNews);
  const News = cardNews.slice(0, 4);

  const getAllCardNews = async () => {
    try {
      const result = await getCardNews();

      setCardNews(result.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCardNews();
  });
  return (
    <div className=" shadow-lg w-[95%] m-auto bg-[#ffff] rounded-lg dark:bg-[#152a38]  max-lg:w-[95%] max-md:w-[80%]  max-md: max-sm:w-[80%]">
      <div className="flex flex-wrap w-[100%] dark:bg-[#29435c] dark:text-[#d1d4c9]">
        <div className="flex flex-wrap w-[95%] mx-auto max-sm:gap-y-3 justify-between dark:bg-[#29435c] dark:text-white">
          {News.map((item, index) => {
            return (
              <Page
                key={index}
                title={item.title}
                miniDescribe={item.miniDescribe}
                currentDissLikeCount={item.currentDissLikeCount}
                currentLikeCount={item.currentLikeCount}
                image={item.currentImageAddressTumb ?? pic}
                id={item.id}
              />
            );
          })}
          <PictureBox />
        </div>
      </div>

      <div className="bg-[#fff] w-[100%] dark:bg-[#29435c] dark:text-[#d1d4c9]  ">
        <div className=" flex flex-wrap w-[95%] mx-auto max-sm:gap-y-3 justify-between dark:bg-[#29435c] dark:text-white ">
          {News.map((item, index) => {
            return (
              <CardPage2
                key={index}
                title={item.title}
                miniDescribe={item.miniDescribe}
                currentDissLikeCount={item.currentDissLikeCount}
                currentLikeCount={item.currentLikeCount}
                image={item.currentImageAddressTumb ?? pic}
                id={item.id}
              />
            );
          })}

          {/* <Pagination />
           */}
        </div>
      </div>
    </div>
  );
};

export default CardNews;

import Page from "./Page";
import PictureBox from "./PictureBox";
// import CardPage2 from "./CardPage2";
import pic from "../../../public/newspaper.png";
import { Pagination } from 'antd';

const CardNews = ({currentPage, setCurrentPage, totalCount, cardNews, setReFetch}) => {
  
  

  console.log(cardNews);
  const topNews = cardNews?.slice(0, 4);
  const bottomNews = cardNews?.slice(4, 8);

  
  
  return (
    <div className=" shadow-lg w-[95%] m-auto bg-[#f3f4f6] rounded-lg dark:bg-[#152a38]  max-lg:w-[95%] max-md:w-[80%]  max-md: max-sm:w-[80%]">
      <div className="flex flex-wrap w-[100%] dark:bg-[#152a38] dark:text-[#d1d4c9]">
        <div className="flex flex-wrap w-[95%] mx-auto max-sm:gap-y-3 justify-between dark:bg-[#152a38] dark:text-white">
          {topNews.map((item, index) => {
            return (
              <Page
              key={index}
              image={item.currentImageAddressTumb??pic}
              newsTitle={item.title}
              miniDescribe={item.miniDescribe}
              addUserFullName={item.addUserFullName}
              currentDissLikeCount={item?.currentDissLikeCount}
              currentUserIsLike={item?.currentUserIsLike}
              currentUserIsDissLike={item?.currentUserIsDissLike}
              newsCatregoryName={item?.newsCatregoryName}
              currentView={item?.currentView}
              isCurrentUserFavorite={item?.isCurrentUserFavorite}
              currentUserFavoriteId={item?.currentUserFavoriteId}
              currentLikeCount={item?.currentLikeCount}
              insertDate={item?.insertDate?.toString()?.slice(0,10)}
              id={item?.id}
              setReFetch={setReFetch} 
              />
            );
          })}
          <PictureBox />
        </div>
      </div>

      <div className="bg-[#f3f4f6] w-[100%] dark:bg-[#152a38] md:mt-8 dark:text-[#d1d4c9]  ">
        <div className=" flex flex-wrap w-[95%] mx-auto max-sm:gap-y-3 justify-start gap-4 dark:bg-[#152a38] dark:text-white ">
          {bottomNews.map((item, index) => {
            return (
              <Page
              key={index}
              image={item.currentImageAddressTumb??pic}
              newsTitle={item.title}
              miniDescribe={item.miniDescribe}
              addUserFullName={item.addUserFullName}
              currentDissLikeCount={item?.currentDissLikeCount}
              currentUserIsLike={item?.currentUserIsLike}
              currentUserIsDissLike={item?.currentUserIsDissLike}
              newsCatregoryName={item?.newsCatregoryName}
              currentView={item?.currentView}
              isCurrentUserFavorite={item?.isCurrentUserFavorite}
              currentUserFavoriteId={item?.currentUserFavoriteId}
              currentLikeCount={item?.currentLikeCount}
              insertDate={item?.insertDate?.toString()?.slice(0,10)}
              id={item.id} 
              setReFetch={setReFetch}
              />
            );
          })}
          <div className=' py-3  w-[100%]'>
            <Pagination align="center" onChange={(e)=>setCurrentPage(e)} current={currentPage} pageSize={8} total={totalCount} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardNews;

import React, { useEffect, useState } from 'react'
import http from "../../../core/services/interceptor"
import { Link } from 'react-router-dom';

const NewsModal = ({Query}) => {
    const [newsList, setnewsList] = useState();

    const getnews = async () => {
        const res = await http.get(`/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=${Query}`)
        setnewsList(res)

    }

    useEffect(() => {
        if (Query !== '') {
          getnews();
      }
    }, [Query]);

  return (
    <div>
      {newsList?.news.map((item, index) => {
          return (
            <div key={index} className="bg-red-200 shadow my-4 p-2 mx-2 rounded-xl flex justify-between">
              <h2 className='text-[12px] max-sm:text-[9px]'>{item.title}</h2>
              <Link to={`/NewsDetail/${item.id}`} className='text-[12px] max-sm:text-[9px]'>جزئیات خبر</Link>
            </div>
          );
      })}
    </div>
  );
}

export default NewsModal
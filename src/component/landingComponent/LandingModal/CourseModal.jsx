import React, { useEffect, useState } from "react";
import http from "../../../core/services/interceptor";
import { Link } from "react-router-dom";

const CourseModal = ({ Query }) => {
  const [CoureList, setCoureList] = useState(null);
  const [MyQuery, setMyQuery] = useState("");

  const getCourseList = async () => {
    const res = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC${MyQuery}&TechCount=0`
    );
    setCoureList(res);
  };

  useEffect(() => {
    if (Query !== '') {
      setMyQuery(`&Query=${Query}`); 
    }
    else {
      setMyQuery('')
    }

  }, [Query]);

  useEffect(() => {
    if (MyQuery !== "") {
      getCourseList();
    }
    

  }, [MyQuery]);

  return (
    <div>
      {CoureList?.courseFilterDtos.map((item,index) => {
        return (
          <div key={index} className="bg-gray-200 shadow my-4 p-2 mx-2 rounded-xl flex justify-between">
            <h2 className='text-[12px] max-sm:text-[9px]'>{item.title}</h2>
            <Link to={`/coursedetail/${item.courseId}`} className='text-[12px] max-sm:text-[9px]'>جزئیات دوره</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CourseModal;

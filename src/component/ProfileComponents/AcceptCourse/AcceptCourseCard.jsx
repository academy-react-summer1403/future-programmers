import React from "react";

const AcceptCourseCard = ({
  course,
  index,
  courseTitle,
  tumbImageAddress,
  describe,
  fullName,
  termName,
  levelName,
}) => {
  return (
    <div
      key={index}
      className="bg-white dark:bg-gray-400 px-4 shadow-2xl  rounded-2xl mt-4 w-full h-16 flex flex-row justify-between items-center "
    >

      <h3 className=" text-lg font-bold text-ellipsis">نام دوره : {courseTitle}</h3>

      <div className="">مدرس : {fullName}</div>
      <div className="">ترم : {termName}</div>
      <div className="">سطح : {levelName}</div>

      

      <div className="flex justify-between">
        <button
          //   href={course.link}
          className="inline-block mt-4  text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_547_722)">
              <path
                d="M16.9561 7.82338C17.1953 8.12534 17.315 8.27636 17.315 8.49984C17.315 8.72332 17.1953 8.87433 16.9561 9.1763C15.8809 10.5332 13.1352 13.4582 9.44459 13.4582C5.754 13.4582 3.00828 10.5332 1.93314 9.1763C1.69386 8.87433 1.57422 8.72332 1.57422 8.49984C1.57422 8.27636 1.69386 8.12534 1.93314 7.82338C3.00828 6.46652 5.754 3.5415 9.44459 3.5415C13.1352 3.5415 15.8809 6.46652 16.9561 7.82338Z"
                stroke="#00BFB3"
                stroke-width="1.5"
              />
              <path
                d="M11.8052 8.5C11.8052 7.32636 10.7482 6.375 9.44412 6.375C8.14008 6.375 7.08301 7.32636 7.08301 8.5C7.08301 9.67364 8.14008 10.625 9.44412 10.625C10.7482 10.625 11.8052 9.67364 11.8052 8.5Z"
                stroke="#00BFB3"
                stroke-width="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_547_722">
                <rect width="18.8889" height="17" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="mt-4 text-blue-800">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.625 4.125L14.1602 11.6438C14.0414 13.5648 13.9821 14.5253 13.5006 15.2159C13.2625 15.5573 12.956 15.8455 12.6005 16.062C11.8816 16.5 10.9192 16.5 8.99452 16.5C7.06734 16.5 6.10372 16.5 5.38429 16.0612C5.0286 15.8443 4.722 15.5556 4.48401 15.2136C4.00266 14.5219 3.94459 13.5601 3.82846 11.6364L3.375 4.125"
              stroke="#CC6E00"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M2.25 4.125H15.75M12.0418 4.125L11.5298 3.0688C11.1897 2.3672 11.0196 2.01639 10.7263 1.79761C10.6612 1.74908 10.5923 1.70591 10.5203 1.66853C10.1954 1.5 9.80558 1.5 9.02588 1.5C8.2266 1.5 7.827 1.5 7.49676 1.67559C7.42357 1.71451 7.35373 1.75943 7.28797 1.80988C6.99123 2.03753 6.82547 2.40116 6.49396 3.12845L6.03969 4.125"
              stroke="#CC6E00"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M7.125 12.375V7.875"
              stroke="#CC6E00"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M10.875 12.375V7.875"
              stroke="#CC6E00"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AcceptCourseCard;

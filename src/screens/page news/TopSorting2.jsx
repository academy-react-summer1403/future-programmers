import Sort2 from "./Sort2";

function TopSorting2() {
  const data = [
    { value: "cost", lable: "مرتب سازی" },
    { value: "likeCount", lable: " جدید ترین" },
    { value: "courseRate", lable: "قدیمی ترین" },
  ];
  return (
    <div className="items-center md:flex mr-[25px] max-xl:mr-[5px] max-lg:mr-[15px]  ">
      <ul className="flex item-center gap-4 max-lg:mr-4 dark:text-[#d1d4c9] max-sm:hidden ">
        {data.map((item, index) => {
          return (
            <Sort2
              key={index}
              value={item.value}
              id={item.lable}
              htmlFor={item.lable}
              topicSort={item.lable}
            />
          );
        })}
      </ul>
      <div>
        <details className="dropdown block sm:hidden max-sm:ml-10">
          <summary className="btn m-1 max-sm:text-xs max-sm:w-[50px]">فیلتر </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-56 p-2 shadow max-sm:w-[100px] max-sm:text-[10px]  whitespace-nowrap">
            <li className="w-[90px]">  
              <a>     مرتب سازی </a>
            </li>
            <li>
              <a> جدید ترین</a>
            </li>
            <li>
              <a> قدیمی ترین</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}

export default TopSorting2;

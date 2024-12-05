

function TopSorting2({setSort}) {
  const data = [
    { value: "cost", lable: "مرتب سازی" },
    { value: "likeCount", lable: " جدید ترین" },
    { value: "courseRate", lable: "قدیمی ترین" },
  ];
  return (
    <div className="items-center md:flex mr-[25px] max-xl:mr-[5px] max-lg:mr-[15px]  ">
      <details className="dropdown block  max-sm:ml-10">
        <summary className="btn m-1 max-sm:text-xs max-sm:w-[50px]">فیلتر </summary>
        <ul onChange={(e)=>setSort(e.target.value)} className="menu dropdown-content bg-base-100 max-sm:left-[0px] rounded-box z-[1] w-[200px] p-2 shadow    whitespace-nowrap">
          {data.map((item,index) =>{
            return(
              <li className="" key={index}>
                <label className="label cursor-pointer">
                    <input type="radio" name="radio-2" value={item.value} id={item.lable} className="radio radio-primary " />
                    <span className="label-text absolute right-14 text-[14px] md:max-lg:text-[12px] dark:text-[#d1d4c9]">{item.lable}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </details>
    </div>
  );
}

export default TopSorting2;

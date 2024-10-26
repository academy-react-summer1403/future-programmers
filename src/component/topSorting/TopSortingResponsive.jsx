import Sort from "./Sort"

function TopSortingResponsive({setSort}) {
  const data = [
    {value: 'cost', lable:'قیمت'},
    {value: 'likeCount', lable:'محبوب ترین ها'},
    {value: 'courseRate', lable:'بروزترین ها'},
  ]
  return (
 <div className='mt-[10px] dark:text-[#d1d4c9]'>
          <h1 className="mr-[6%] text-[15px]">مرتب سازی</h1>
         <ul onChange={(e)=>setSort(e.target.value)} >
        {data.map((item, index)=>{
          return(<Sort 
            key={index} 
            value={item.value}  
            id={item.lable}
          htmlFor={item.lable} 
          topicSort={item.lable} />
            )
        })}
      </ul>
    </div>
  )
}

export default TopSortingResponsive
import Sort from "./Sort"

function TopSorting({setSort}) {

  const data = [
    {value: 'cost', lable:'قیمت'},
    {value: 'likeCount', lable:'محبوب ترین ها'},
    {value: 'courseRate', lable:'بروزترین ها'},
  ]
  return (
    <div className='items-center max-md:hidden md:flex mr-[25px] max-xl:mr-[5px] max-lg:mr-[15px]'>
      <ul className='flex item-center gap-4 max-lg:mr-4 dark:text-[#d1d4c9]' onChange={(e)=>setSort(e.target.value)} >
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

export default TopSorting
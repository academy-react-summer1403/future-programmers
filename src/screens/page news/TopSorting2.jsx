import Sort2 from "./Sort2"


function TopSorting2() {

  const data = [
    {value: 'cost', lable:'مرتب سازی'},
    {value: 'likeCount', lable:' جدید ترین'},
    {value: 'courseRate', lable:'قدیمی ترین'},
  ]
  return (
    <div className='items-center md:flex mr-[25px] max-xl:mr-[5px] max-lg:mr-[15px]'>
      <ul className='flex item-center gap-4 max-lg:mr-4 dark:text-[#d1d4c9]'  >
        {data.map((item, index)=>{
          return(<Sort2 
            key={index} 
            value={item.value}  
            id={item.lable}
            htmlFor={item.lable} 
            topicSort={item.lable} />

            )
            

        })}
      </ul>
      <div>
    
      </div>
    </div>
  )
}

export default TopSorting2
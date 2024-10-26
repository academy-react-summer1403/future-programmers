

function TopSorting({setSort}) {

  const data = [
    {value: 'cost', lable:'قیمت'},
    {value: 'likeCount', lable:'محبوب ترین ها'},
    {value: 'courseRate', lable:'بروزترین ها'},
  ]
  return (
    <div className='items-center max-md:hidden md:flex mr-[25px] max-xl:mr-[5px] max-lg:mr-[15px]'>
        <ul className='flex item-center gap-4 max-lg:mr-4 dark:text-[#d1d4c9]' onChange={(e)=>setSort(e.target.value)}>
        {data.map((item, index)=>{
          return(<li key={index} value={item.value} className="hover:scale-110 duration-1000" >
            <input type="radio" value={item.value} id={item.lable}  name='sort' className="hidden" />
            <label htmlFor={item.lable} className="hover:cursor-pointer max-lg:text-[12px]">{item.lable}</label>
            </li>)
        })}
        </ul> 
    </div>
  )
}

export default TopSorting
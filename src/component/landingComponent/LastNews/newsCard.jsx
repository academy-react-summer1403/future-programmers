import { Link } from "react-router-dom"


function NewsCard({image, newsTitle, newsText, writer,id}) {
  return (
    <div className='bg-white rounded-3xl flex h-[250px] max-lg:h-[210px] max-md:h-40 w-[49%] max-sm:w-[100%] dark:bg-[#29435c] '>
        <img src={image} alt="" className=' rounded-2xl h-[87%] lg:w-[38%] sm:w-[43%] max-sm:w-[26%] my-auto mr-[4%]' />
        <div className='h-[87%] lg:w-[60%] sm:w-[55%] max-sm:w-[72%] my-auto mr-[3%]'>
          <Link to={'/NewsDetail/'+id} className='font-extrabold text-violet-800 dark:text-[#c7e7b7] max-lg:text-[13px] max-md:text-[11px] max-md:font-normal'>{newsTitle}</Link>
          <p className='mt-2 indent-2 w-[95%] h-36 max-lg:h-32 max-md:h-[92px] text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[9px] dark:text-[#d1d4c9] overflow-hidden'>{newsText}</p>
          <h3 className='text-xs font-semibold max-lg:font-normal  max-md:text-[10px] mt-[5%] max-lg:mt-[4%] max-md:mt-0 flex dark:text-[#c7e7b7]'>نویسنده:<h3 className="mr-1 text-red-700 dark:text-[#e19f9f]" > {writer}</h3></h3>
        </div>                           
    </div>
  )
}

export default NewsCard


function NewsCard({image, newsTitle, newsText, writer}) {
  return (
    <div className='bg-white rounded-3xl flex h-[250px] max-lg:h-[210px] max-md:h-40 w-[49%] max-sm:w-[100%] dark:bg-[#29435c] '>
        <img src={image} alt="" className=' rounded-2xl h-[87%] my-auto mr-[4%]' />
        <div className='h-[87%] my-auto mr-[3%]'>
          <h1 className='font-extrabold text-violet-800 max-lg:text-[13px] max-md:text-[11px] max-md:font-normal'>{newsTitle}</h1>
          <p className='mt-2 indent-2 w-[95%] h-36 max-lg:h-32 max-md:h-[92px] text-[14px] max-lg:text-[12px] max-md:text-[10px] overflow-hidden'>{newsText}</p>
          <h3 className='text-xs font-semibold max-lg:font-normal max-lg:text-[15px] max-md:text-[10px] mt-[5%] max-lg:mt-[4%] max-md:mt-0 flex'>نویسنده:<h3 className="mr-1 text-red-700" > {writer}</h3></h3>
        </div>                           
    </div>
  )
}

export default NewsCard
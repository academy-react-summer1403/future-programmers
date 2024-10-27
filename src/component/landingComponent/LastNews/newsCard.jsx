

function NewsCard({image, newsTitle, newsText, writer}) {
  return (
    <div className='bg-white rounded-3xl flex h-[250px] w-[49%] dark:bg-[#29435c] '>
        <img src={image} alt="" className=' rounded-2xl h-[87%] my-auto mr-[4%]' />
        <div className='h-[87%] my-auto mr-[3%]'>
          <h1 className='font-extrabold'>{newsTitle}</h1>
          <p className='mt-2 indent-2 w-[95%] h-36 text-[14px] overflow-hidden'>{newsText}</p>
          <h3 className='text-xs font-semibold mt-[5%]'>نویسنده : {writer}</h3>
        </div>                           
    </div>
  )
}

export default NewsCard
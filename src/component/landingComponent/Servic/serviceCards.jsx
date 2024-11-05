import pic from '../../../../public/card.png'


function ServiceCards({title, text}) {
  return (
    <div className='bg-white rounded-3xl flex h-[250px] max-lg:h-[210px] max-md:h-40 w-[49%] max-sm:w-[100%] dark:bg-[#29435c] '>
        <img src={pic} alt="" className=' rounded-2xl h-[87%] lg:w-[38%] sm:w-[43%] max-sm:w-[26%] my-auto mr-[4%]' />
        <div className='h-[87%] lg:w-[60%] sm:w-[55%] max-sm:w-[72%] my-auto mr-[3%]'>
          <h1 className='font-extrabold text-violet-800 dark:text-[#c7e7b7] max-lg:text-[13px] max-md:text-[11px] max-md:font-normal'>{title}</h1>
          <p className='mt-2 indent-2 w-[95%] h-36 max-lg:h-32 max-md:h-[92px] text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[9px] dark:text-[#d1d4c9] overflow-hidden'>{text}</p>
        </div>                           
    </div>
  )
}

export default ServiceCards
import linkedin from '../../../public/linkedin.png';
import youtube from '../../../public/youtube.png';
import instagram from '../../../public/instagram.png';
import telegram from '../../../public/telegram.png';
import samandehi from '../../../public/samandehi.png';
import Logo from '../../../public/Logo.png';


function Footer() {
  return (
    <div className=' border border-solid'>
      <div className='flex relative top-[30px] max-sm:flex-col-reverse'>
        <div className='w-2/5 border[1px_solid_red] text-[12px] max-sm:w-[100%] max-md:w-[35%] '>
          <p className='mr-[17%] mt-[23%] w-[74%] max-sm:mt-[10%] max-md:mx-auto max-md:w-[84%]'>مجموعه آموزشی فلان فعالیت خود را از سال 1390 آغاز کرده است و امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است.</p>
          <p className='mr-[17%] mt-[4%] w-[74%] font-bold text-[16px] max-md:mx-auto max-sm:text-[15px] max-md:w-[84%]'> ساری، جاده خزر، میدان فرح آباد، جنب مجتمع دنیای آرزو  43332000-011</p>
        </div>

        <div className='w-1/5  max-sm:w-[100%] max-md:w-[30%]'>
          <div className='h-1/3'><img src={Logo} className='rounded-[30%] h-[100%] w-[46%] max-sm:w-[30%] m-[auto]'></img></div>
          <div className='bg-slate-400 text-center rounded-[23px] mt-[35px] max-sm:mt-[15px] max-sm:w-[50%] max-sm:mr-[25%]'><a href='' className='text-[20px] max-sm:text-[15px] max-sm:m-x:auto'>info@pazhooheshgah.ir</a></div>
          <div className='flex justify-center gap-3 mt-[15%] max-sm:mt-[5%]'>
            <div className='bg-slate-400 w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src={linkedin} className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
            <div className='bg-slate-400 w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src={youtube} className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
            <div className='bg-slate-400 w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src={instagram} className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
            <div className='bg-slate-400 w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src={telegram} className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
          </div>
        </div>

        <div className='w-2/5 flex items-center text-[13px] max-sm:hidden max-md:w-[35%]'>
          <ul className='mr-14 list-disc mt-4 leading-7'>
            <li><a href='#'>دوره ها</a></li>
            <li><a href='#'>اخبار و مقالات</a></li>
            <li><a href='#'>پادکست ها</a></li>
            <li><a href='#'>تماس ها</a></li>
          </ul>
          <ul className='mr-12 list-disc mt-4 leading-7'>
            <li><a href='#'>اساتید برتر</a></li>
            <li><a href='#'>دسته بندی ها</a></li>
            <li><a href='#'>خدمات ما</a></li>
            <li><a href='#'>ورود به حساب</a></li>
          </ul>
          <img src={samandehi} className='w-44 mr-5'></img>
        </div>
      </div>
      <div className='bg-slate-400 h-[31px] relative bottom-[-91px] max-sm:bottom-[-50px] max-md:bottom-[-30px] border border-transparent'>
        <h3 className=' text-center max-sm:text-[13px] mt-[4px]'>کلیه حقوق این وبسایت متعلق به آموزشگاه فلان می باشد.</h3>
      </div>
    </div>
  )
}

export {Footer}

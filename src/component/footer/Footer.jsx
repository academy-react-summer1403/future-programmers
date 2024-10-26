import linkedin from '../../../public/linkedin.png';
import youtube from '../../../public/youtube.png';
import instagram from '../../../public/instagram.png';
import telegram from '../../../public/telegram.png';
import samandehi from '../../../public/samandehi.png';
import Logo from '../../../public/Logo.png';


function Footer() {
  return (
    <div className=' border-solid'>
      <div className='flex relative top-[15px] max-sm:flex-col-reverse'>
        <div className='w-2/5 border[1px_solid_red] text-[12px] max-sm:w-[100%] max-md:w-[35%] '>
          <p className='mr-[17%] mt-[12%] w-[74%] max-sm:mt-[10%] max-md:mt-[20%] max-md:mx-auto max-md:w-[84%]'>مجموعه آموزشی فلان فعالیت خود را از سال 1390 آغاز کرده است و امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است.</p>
          <p className='mr-[17%] mt-[4%] w-[74%] font-bold text-[16px] max-md:mx-auto max-sm:text-[15px] max-md:w-[84%] max-md:text-[13px] max-md:mt-[5%]'> ساری، جاده خزر، میدان فرح آباد، جنب مجتمع دنیای آرزو  43332000-011</p>
        </div>

        <div className='w-1/5  max-sm:w-[100%] max-md:w-[30%]'>
          <div className='h-1/3 sm:max-md:h-[40%]'><img src={Logo} className='rounded-[30%] h-[100%] w-[46%] max-sm:w-[30%] max-md:w-[42%] max-md:h-[95%] m-[auto]'></img></div>
          <div className='bg-slate-400 text-center rounded-[23px] mt-[35px] max-md:mt-[25px] max-md:w-[75%] max-md:mr-[12%] max-sm:mt-[15px] max-sm:w-[50%] max-sm:mr-[25%]'><a href='' className='text-[20px] max-md:text-[15px] max-lg:text-[17px] max-sm:m-x:auto'>info@pazhooheshgah.ir</a></div>
          <div className='flex justify-center gap-3 mt-[15%] max-sm:mt-[5%] max-md:mt-[7%]'>
            <div className='bg-slate-400 w-[40px] h-[40px] sm:max-md:w-[32px] sm:max-md:h-[32px] rounded-[50%]'><a href='#'><img src={linkedin} className='w-[79%] mr-[10%] mt-[10%] sm:max-md:w-[25px]'></img></a></div>
            <div className='bg-slate-400 w-[40px] h-[40px] sm:max-md:w-[32px] sm:max-md:h-[32px] rounded-[50%]'><a href='#'><img src={youtube} className='w-[79%] mr-[10%] mt-[10%] sm:max-md:w-[25px]'></img></a></div>
            <div className='bg-slate-400 w-[40px] h-[40px] sm:max-md:w-[32px] sm:max-md:h-[32px] rounded-[50%]'><a href='#'><img src={instagram} className='w-[79%] mr-[10%] mt-[10%] sm:max-md:w-[25px]'></img></a></div>
            <div className='bg-slate-400 w-[40px] h-[40px] sm:max-md:w-[32px] sm:max-md:h-[32px] rounded-[50%]'><a href='#'><img src={telegram} className='w-[79%] mr-[10%] mt-[10%] sm:max-md:w-[25px] sm:max-md:mx-auto'></img></a></div>
          </div>
        </div>

        <div className='w-2/5 flex items-center text-[13px] max-lg:text-[12px] max-sm:hidden max-md:w-[35%]'>
          <ul className='mr-14 list-disc mt-4 leading-6 sm:max-md:leading-5 sm:max-lg:mr-[50px]'>
            <li><a href='#'>دوره ها</a></li>
            <li><a href='#'>اخبار و مقالات</a></li>
            <li><a href='#'>پادکست ها</a></li>
            <li><a href='#'>تماس ها</a></li>
          </ul>
          <ul className='mr-12 list-disc mt-4 leading-6 sm:max-md:leading-5 sm:max-lg:mr-[20px]'>
            <li><a href='#'>اساتید برتر</a></li>
            <li><a href='#'>دسته بندی ها</a></li>
            <li><a href='#'>خدمات ما</a></li>
            <li><a href='#'>ورود به حساب</a></li>
          </ul>
          <img src={samandehi} className='w-44 max-lg:w-32 mr-5 sm:max-md:w-[23%] sm:max-md:mr-0 max-lg:mr-[4]'></img>
        </div>
      </div>
      <div className='bg-slate-400 h-[31px] relative bottom-[-31px] max-md:bottom-[-30px] border border-transparent'>
        <h3 className=' text-center max-sm:text-[13px] mt-[4px]'>کلیه حقوق این وبسایت متعلق به آموزشگاه فلان می باشد.</h3>
      </div>
    </div>
  )
}

export {Footer}

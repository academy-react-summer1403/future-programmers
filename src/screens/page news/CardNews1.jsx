import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Page from "./Page";
import PictureBox from "./PictureBox";

const CardNews1 = () => {
    
        const [CardList, setCardList] = useState([
            {
            id: 1,
            pic: "",
            title: " سرتیتر خبر1",
            desc: "وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید",
            },
            {
            id: 2,
            pic: "",
            title: "سرتیتر خبر2 ",
            desc: "وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید",
            },
            {
            id: 3,
            pic: "",
            title: " سرتیتر خبر3",
            desc: " وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید",
            },
            {
            id: 4,
            pic: "",
            title: " سرتیتر خبر4",
            desc: " وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید",
            },
        ]);
return (

  
<div className="flex flex-wrap w-[100%] dark:bg-[#29435c] dark:text-[#d1d4c9]">
        <div className="flex flex-wrap w-[95%] mx-auto max-sm:gap-y-3 justify-between dark:bg-[#29435c] dark:text-white">
        {CardList.map((item, index) => {
            return (
                <Page  
                    key={index}
                    title={item.title}
                    desc={item.desc}
                />

            );
        })}

        <PictureBox/>
        </div>
    </div>   

)
}

export default CardNews1

import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { TiHeartOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const CardPage2 = ({title,miniDescribe,currentDissLikeCount,currentLikeCount}) => {
return (
    <div className=" bg-white rounded-lg w-[23%] dark:bg-[#152a38] max-lg:w-[45%]  max-sm:w-[100%] max-sm:mt-2 shadow-lg ">
    
        <div className="h-[40%] w-[90%]  mx-auto pt-3 ">
            <img src="./newspaper.png" alt="" className=" h-[100%] w-[100%]   " />
        </div>

    <h1 className="pr-5 mt-2"> {title} </h1>
    <p className="  mx-auto pr-3 mt-1 w-[95%] h-[50%] overflow-hidden"> {miniDescribe} </p>

    <div className="flex relative bottom-20 mr-48 gap-2 max-sm:left-28">
    <TiHeartOutline size={20} fill="red" /> 
    
            <h1> {currentLikeCount}
                <AiOutlineLike fill="" size={20} /> 
            </h1>

            <h1> {currentDissLikeCount}
                <AiOutlineDislike size={20} /> 
            </h1>
        </div> 
        <NavLink to="/newsdetail">
        <button className="btn  relative right-4 bottom-28 "> ادامه مطلب </button>

        </NavLink>
</div>
)
}

export default CardPage2

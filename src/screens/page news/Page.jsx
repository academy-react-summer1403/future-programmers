import { NavLink } from "react-router-dom";
import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Page = ({title,desc}) => {
return (
    
    <div className=" mt-3 bg-white rounded-lg w-[23%] dark:bg-[#152a38] max-lg:w-[45%]  max-sm:w-[100%] max-sm:mt-2 shadow-lg">
        
        
            <div className="h-[40%] w-[90%]  mx-auto pt-3 ">
                <img src="./newspaper.png" alt="" className=" h-[100%] w-[100%]" />
            </div>
     
        <h1 className="pr-5 mt-2"> {title} </h1>
        <p className=" mx-auto pr-3 mt-1 w-[95%] h-[50%] overflow-hidden"> {desc} </p>
        
        <div className="flex relative bottom-8 mr-52 gap-2 ">
    <TiHeartOutline size={20} fill="red" /> 
    <AiOutlineLike fill="" size={20}/> 
    <AiOutlineDislike size={20} />
        </div>

        <NavLink to="/newsdetail">
        <button className="btn  relative right-4 bottom-16 "> ادامه مطلب </button>
        </NavLink>

    </div>
    
);
};

export default Page;

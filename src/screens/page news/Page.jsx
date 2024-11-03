import { NavLink } from "react-router-dom";

const Page = ({title,desc}) => {
  return (
    <div className="  bg-white rounded-lg w-[23%] dark:bg-[#152a38] max-lg:w-[45%]  max-sm:w-[100%] max-sm:mt-2 shadow-lg ">
        <NavLink to="/newsdetail">
            <div className="h-[40%] w-[90%]  mx-auto pt-3 ">
                <img src="./newspaper.png" alt="" className=" h-[100%] w-[100%]   " />
            </div>
        </NavLink>
        <h1 className="pr-5 mt-2"> {title} </h1>
        <p className="  mx-auto pr-3 mt-1 w-[95%] h-[50%] overflow-hidden"> {desc} </p>
    
    </div>
);
};

export default Page;

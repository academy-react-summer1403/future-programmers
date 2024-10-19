import React, { useState } from "react";

const Log = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="  h-[300px] mt-20    ">
      <form onSubmit={handleSubmit} className="  ">
        <div className=" border border-#707070-500 w-[325px] h-[53px]  m-3 rounded-lg ">
          <input
            className="text-right bg-[#F3F4F6] h-full w-[325px] rounded-lg "
            placeholder=" نام"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>



        
        <div className="border border-#707070-500 w-[327px] h-[53px] flex justify-content m-3 gap-[2px] rounded-lg ">
          <input
            className="text-right bg-[#F3F4F6] w-full "
            placeholder=" شماره تماس"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="border border-#707070-500  h-[53px] flex justify-content m-3 gap-[2px] rounded-lg">
          <input
            className="text-right bg-[#F3F4F6]  w-full"
            placeholder=" رمز عبور"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="border border-#707070-500 w-[100%] h-[53px] text-center m-1 gap-[2px] bg-[#436E8E] text-center rounded-lg"
          type="submit"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default Log;

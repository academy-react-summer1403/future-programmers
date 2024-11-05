import React from "react";

const RulesPage = () => {
  return (
    <div className="flex mt-52 mr-52">
      {/* <h1 className='mt-28  underline text-xs  mr-64 text-[#8D8D8D]'>
        قوانین و شرایط 
        </h1> */}

      <button
        className="btn max-md:text-xs max-sm:text-[10px] max-sm:w-[80px] max-sm:whitespace-nowrap
         dark:dark:bg-[#152a38] dark:text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {" "}
        قوانین و شرایط
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box mt-28  text-xs mr-64 dark:dark:bg-[#152a38]
         text-[#8D8D8D] max-md:w-[200px] max-sm:w-[190px] max-sm:ml-32">
          <h3 className="font-bold text-lg max-md:text-xs dark:dark:bg-[#152a38]
           dark:text-white">
            {" "}
            قوانین را مطالعه کنید{" "}
          </h3>
          <p className="py-4 dark:dark:bg-[#152a38] dark:text-white">
            {" "}
            شما متعهد می‌شوید که از خدمات وب‌سایت به شیوه‌ای قانونی و مطابق با
            این قوانین استفاده کنید. • هرگونه سوءاستفاده از خدمات وب‌سایت، از
            جمله ارسال محتواهای غیرمجاز یا تبلیغات ناخواسته، ممنوع است.{" "}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn max-sm:w-[10px] max-sm:text-[10px]
               dark:dark:bg-[#152a38] dark:text-white ">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RulesPage;

import ServiceCards from "./serviceCards"


function Services() {
  const service =[
    {title:"مشاوره", text:"متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است."},
    {title:"فرصت های شغلی", text:"متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است."},
    {title:"مدرک معتبر", text:"متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است."},
    {title:"مشاوره", text:"متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است."}
  ]
  return (
    <section className="flex justify-center overflow-x-hidden pt-5 pb-[20px] max-sm:pb-[10px] ">
    <div className="w-[90%] mx-auto px-4">
        <h2 className="text-2xl max-sm:text-[14px] max-md:text-[17px] max-lg:text-[18px] font-bold max-sm:pr-[11px] pr-[2%] text-[#436e8e]">خدمات ما </h2>

        <div className="flex flex-wrap justify-between gap-y-3 mt-5 max-sm:mt-3">
            {service.map((item, index) => (
              <ServiceCards
                key={index}
                title={item.title}
                text={item.text} 
              />   
              
                )
            )}
        </div>
    </div>
</section>

  //   <section className="py-12 overflow-x-hidden bg-[url(public/line.png)] [background-size:100%_100%] max-sm:[background-size:100%_30%] max-md:[background-size:150%_50%] max-md:[background-position:50%]  bg-no-repeat">
  //   <div className="container mx-auto px-4 ">
  //     <h2 className="text-2xl font-bold text-center mb-8">خدمات</h2>
  //     <div className=" p-6 rounded-lg shadow-md text-center">
  //       <h3 className="font-bold text-lg mb-4">مدرک معتبر</h3>
  //       <p className="text-gray-600">
  //         مدرک معتبر را با ما دریافت کنید که قابل ارائه به موسسات رسمی است و
  //         معتبر برای کسب و کارها.
  //       </p>
  //     </div>
  //   </div>
  // </section>
  )
}

export default Services
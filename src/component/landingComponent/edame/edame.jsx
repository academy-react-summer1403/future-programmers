
const Edame = () => {


  return (
    <div className="flex justify-center overflow-x-hidden max-sm:pt-5 pb-[20px] max-sm:pb-[10px]">
      {/* Category Section */}
      
        <div className="w-[90%] mx-auto max-sm:pt-2 px-4">
          <h2 className="text-xl max-sm:text-[14px] font-bold pr-[2%] mb-6 max-sm:text-right max-sm:pr-2 text-[#436e8e] dark:text-[#d1d4c9]">دسته بندی</h2>
          <div className="flex flex-wrap justify-evenly gap-6 dark:text-[#d1d4c9]">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#29435e] rounded-lg shadow-md p-6 text-center md:basis-[22%] basis-full"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-24  object-contain mb-4 rounded dark:bg-[#29435e]"
                />
                <h3 className="text-lg font-bold">{category.title}</h3>
                <h4 className="text-lg font-normal">{category.description}</h4>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

// Sample Data

const categories = [
  {
    image: "./Image 3.png",
    title: "فرانت اند",
    description: "Lorem ipsum",
  },
  {
    image: "./Image 4.png",
    title: "بک اند",
    description: "Lorem ipsum",
  },
  {
    image: "./Image 3.png",
    title: "امنین",
    description: "Lorem ipsum",
  },
  {
    image: "./Image 5.png",
    title: "هوش مصنوعی",
    description: "Lorem ipsum",
  },
];

export default Edame;

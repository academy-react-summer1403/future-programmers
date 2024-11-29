import AOS from 'aos';
import 'aos/dist/aos.css';
const Category = () => {

  AOS.init(
   { disable: false,
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate',
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, 
    delay: 0, 
    duration: 400,
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom'}
  );
  return (
    <div className="flex justify-center overflow-x-hidden max-sm:pt-3 pb-[20px] max-sm:pb-[10px]">
      {/* Category Section */}
      
        <div className="w-[90%] mx-auto max-sm:pt-2 px-4">
          <h2 className="text-xl max-sm:text-[14px] font-bold pr-[2%] mb-6 max-sm:mb-4 max-sm:text-right max-sm:pr-2 text-[#436e8e] dark:text-[#d1d4c9]">دسته بندی</h2>
          <div className="flex flex-wrap justify-evenly gap-6 dark:text-[#d1d4c9]">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#29435e] rounded-lg shadow-md p-6 text-center md:basis-[22%] basis-full"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="4000"
              >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-24  object-contain mb-4 rounded dark:bg-[#29435e]"
                  />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <h4 className="text-lg font-normal">{item.description}</h4>
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
    title: "امنیت",
    description: "Lorem ipsum",
  },
  {
    image: "./Image 5.png",
    title: "هوش مصنوعی",
    description: "Lorem ipsum",
  },
];

export default Category;

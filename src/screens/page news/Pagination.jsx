import React from 'react'

const Pagination = () => {
  return (
    
    <div className="join w-[100%] h-[50px] mb-4 mt-[16px] mx-14 max-md:mx-[20%] max-lg:mx-[30%] max-xl:mx-[40%] max-2xl:mx-[40%]">
  <input
    className="join-item btn btn-square "
    type="radio"
    name="options"
    aria-label="1 "
    defaultChecked  />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2"  />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="6" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="7" />
</div>
  )
}

export default Pagination

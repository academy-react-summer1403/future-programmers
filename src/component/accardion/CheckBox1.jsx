

function CheckBox1({topic, id, handleTypeCourseFilter}) {
  return (
    <div className="form-control" >
      <label className="label cursor-pointer">
          <input type="radio" name="radio-2" id={id} onChange={handleTypeCourseFilter} className="radio radio-primary md:max-lg:w-[20px] md:max-lg:h-[20px] w-[24px] h-[24px]" />
          <span className="label-text absolute right-14 text-[14px] md:max-lg:text-[12px] dark:text-[#d1d4c9]">{topic}</span>
      </label>
    </div>
  )
}

export default CheckBox1
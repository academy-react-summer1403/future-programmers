function Sort2({ value, id, htmlFor, topicSort }) {
  return (
    <>
      <li
        value={value}
        className="hover:scale-110 duration-1000 max-md:mt-1 max-md:hover:scale-100 max-md:duration-0"
      >
        <input
          type="radio"
          value={value}
          id={id}
          name="sort"
          className="hidden"
        />
        <label
          htmlFor={htmlFor}
          className="hover:cursor-pointer max-lg:text-[12px] max-md:text-[13px] "
        >
          {topicSort}
        </label>
      </li>
    </>
  );
}

export default Sort2;

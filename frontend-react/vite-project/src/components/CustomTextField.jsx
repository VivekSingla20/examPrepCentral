import React from "react";

const CustomTextField = (props) => {
  return (
    <>
      <div className="relative w-full ">
        <input
          type={props.type}
          placeholder=" "
          name={props.name}
          className="peer py-2 block w-full appearance-none rounded-lg bg-[#263237] px-3 text-lg text-white focus:outline-none focus:ring-2 focus:[#1db8cd] transition-all duration-200 border-2 border-white"
          disabled={props.name !== "otp" ? false : props.disabled}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
        <label
          htmlFor={props.name}
          className={`absolute left-3 transition-all duration-200 transform ${
            props.value
              ? "top-0 text-sm text-[#1db8cd] bg-[#263237] p-1 px-2 rounded-lg -translate-y-1/2"
              : "top-1/2 text-lg text-gray-400 -translate-y-1/2"
          } peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#1db8cd] peer-focus:bg-[#263237] peer-focus:p-1 peer-focus:px-2 peer-focus:-translate-y-1/2 rounded-lg`}
        >
          {props.placeholder}
        </label>
      </div>
      {props.warning && <p className="text-red-400 mb-2">{props.warning}</p>}
    </>
  );
};

export default CustomTextField;

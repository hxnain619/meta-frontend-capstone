import React from "react";

const Input = ({ label, id, type, placeholder, value, onChange, ...props }) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        data-testid={id}
        name={id}
        type={type}
        id={id}
        placeholder={placeholder ?? `Enter ${label}`}
        value={value}
        onChange={onChange}
        aria-required="true"
        aria-labelledby={`${id}-label`}
        {...props}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;

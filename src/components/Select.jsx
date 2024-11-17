const Select = ({ id, label, value, onChange, options, ...props }) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={id}
        aria-labelledby={label}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...props}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled hidden>
          Select {label}
        </option>
        {options?.length > 0 &&
          options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;

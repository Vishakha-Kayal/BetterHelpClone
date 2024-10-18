import React from 'react'


const InputField = ({
    id,
    label,
    type,
    placeholder,
    value,
    name,
    onChange,
    required,
    maxDigits,
  }) => (
    <div className="w-[94%] mx-auto my-7">
      <label
        className="block mb-2 text-xl font-medium text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full p-6 border border-gray-300 rounded-lg text-xl outline-none hover:shadow-[0_0_0_2.7px_#a6de9b]"
        value={value}
        onChange={onChange}
        maxLength={maxDigits}
        required={required}
      />
    </div>
  );

export default InputField
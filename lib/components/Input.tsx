import React from "react";

export interface InputFieldProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean | string;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  disabled,
  error,
  value,
}) => {
  const baseStyles =
    "w-full py-2 px-3 rounded-md border outline-none transition-colors";

  let inputStyles = baseStyles;
  if (error) {
    inputStyles += " border-red-400";
  } else {
    inputStyles += " border-neutral-300";
    if (disabled) {
      inputStyles += " bg-neutral-200 text-neutral-500 cursor-not-allowed";
    } else {
      inputStyles += " hover:border-primary-500 focus:border-primary-500";
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={inputStyles}
        disabled={disabled}
        value={value}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}{" "}
    </>
  );
};

export default InputField;

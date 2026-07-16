import React from "react";

type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
  required?: boolean;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  id,
  name,
  type = "text",
  placeholder,
  value,
  maxLength,
  required = false,
  autoComplete,
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
    />
  );
}
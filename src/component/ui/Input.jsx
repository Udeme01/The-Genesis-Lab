import React from "react";

const Input = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  disabled = false,
  formik,
  as = "input",
  options,
}) => {
  const inputId = id || name;

  const { handleBlur, handleChange, values, errors, touched } = formik;

  const hasError = Boolean(errors[name] && touched[name]);

  const inputStyles = `outline-none border border-stone-200 p-6 rounded w-full focus:border-green-700 transition-all duration-500 ease-in-out placeholder:text-stone-300 rounded-tr-4xl rounded-bl-4xl`;

  const Component = as;

  return (
    <div className="w-full">
      {label && <label>{label}</label>}
      {as === "select" ? (
        <select
          id={inputId}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name] || ""}
          className={inputStyles}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Component
          id={inputId}
          type={as === "input" ? type : type}
          name={name}
          placeholder={placeholder}
          className={inputStyles}
          formik={formik}
          value={values[name] || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      )}
      {hasError && <p className="text-red-500 text-xs mt-2">{errors[name]}</p>}
    </div>
  );
};

export default Input;

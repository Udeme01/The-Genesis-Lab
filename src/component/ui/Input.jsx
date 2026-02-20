import React from "react";

const Input = ({ label, id, name, type, className, formik, as }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      {as === "select" ? <select>...</select> : <Component />}
    </div>
  );
};

export default Input;

import { useField } from "formik";
import React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const CustomInput = ({ label, ...props }) => {
    const { message } = useSelector(state => state.message);
  // @ts-ignore
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}

    </>
  );
};
export default CustomInput;

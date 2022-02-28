import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const InputField = (props) => {
  const { form, name, lable } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="normal"
      fullWidth
      label={lable}
      error={!!hasError}
      helperText={errors[name]?.message}
    ></Controller>
  );
};

export default InputField;

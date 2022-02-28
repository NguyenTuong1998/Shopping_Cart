import InputField from "components/form-control/Input-Field";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ToDoForm = (props) => {
  const schema = yup
    .object()
    .shape({
      title: yup
        .string()
        .required("Please enter title...!")
        .min(5, "Title is too short"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" lable="Todo" form={form} />
    </form>
  );
};

export default ToDoForm;

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import QuantityField from "components/form-control/Quantity-Field";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddtoCartForm = ({ onSubmit = null }) => {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "please enter at least 1")
      .typeError("Please enter a number."),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" lable="Quantity" form={form} />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "250px" }}
      >
        Add To Cart
      </Button>
    </form>
  );
};

export default AddtoCartForm;

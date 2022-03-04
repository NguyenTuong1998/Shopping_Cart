import { Box, FormHelperText, IconButton, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Controller } from "react-hook-form";

const useStyle = makeStyles((theme) => ({
  root: {},
  box: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    maxWidth: "200px",
  },
}));
const QuantityField = (props) => {
  const classes = useStyle();
  const { form, name, lable, disable } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];

  return (
    <FormControl
      error={hasError}
      fullWidth
      variant="outlined"
      margin="normal"
      size="small"
    >
      <Typography>{lable}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              disabled={disable}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

export default QuantityField;

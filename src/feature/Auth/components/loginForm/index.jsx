import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { LockOutlined } from "@material-ui/icons";
import InputField from "components/form-control/Input-Field";
import PassWordField from "components/form-control/Password-Field";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    position: "relative",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 1, 0),
  },
  submit: { margin: theme.spacing(3, 0, 2) },
  progress: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
}));
const LoginForm = (props) => {
  const classes = useStyle();
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address."),

    password: yup.string().required("Please enter your password"),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" lable="Email" form={form} />
        <PassWordField name="password" lable="PassWord" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

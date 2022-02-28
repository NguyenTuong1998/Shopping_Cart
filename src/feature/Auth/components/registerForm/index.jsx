import InputField from "components/form-control/Input-Field";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PassWordField from "components/form-control/Password-Field";
import LinearProgress from "@material-ui/core/LinearProgress";

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
const RegisterForm = (props) => {
  const classes = useStyle();
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Please enter your full name.")
      .test(
        "Should has at least two words.",
        "Please enter at least to word.",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address."),

    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 character."),

    retypePassword: yup
      .string()
      .required("Please enter your password")
      .oneOf([yup.ref("password")], "Please does not match"),
  });

  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          className={classes.root}
          name="fullname"
          lable="Full Name"
          form={form}
        />
        <InputField name="email" lable="Email" form={form} />
        <PassWordField name="password" lable="PassWord" form={form} />

        <PassWordField
          name="retypePassword"
          lable="ReType PassWord"
          form={form}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

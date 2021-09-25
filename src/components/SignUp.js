import React from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import ReactSelect from "react-select";

import PrimaryButton from "./Button";
import Form from "./Form";
import Input from "./Input";

import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!")
    .matches(/^([^0-9]*)$/, "Username should not contain numbers"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password at least 8 characters"),
  acceptTerms: yup
    .bool()
    .oneOf([true], "Accept Terms & Conditions is required"),
  birthday: yup.date().required("Birthday is required"),
});

const SignUp = () => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  //console.log(errors);

  return (
    <React.Fragment>
      <Typography align="center" component="h1" variant="h3" color="primary">
        Sign Up
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="username"
          label="Username"
          error={!!errors.username}
          helperText={errors?.username?.message}
        />
        <Input
          ref={register}
          type="email"
          name="email"
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <Input
          ref={register}
          type="password"
          name="password"
          label="Password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        <FormControl
          style={{ marginTop: 18, marginBottom: 6 }}
          component="fieldset"
        >
          <FormLabel component="legend">Gender</FormLabel>
          <Controller
            name="gender"
            control={control}
            defaultValue="female"
            as={
              <RadioGroup row aria-label="gender">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            }
          />
        </FormControl>
        <FormControl fullWidth style={{ marginTop: 18, marginBottom: 6 }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              control={control}
              name="birthday"
              defaultValue={new Date()}
              render={(props) => (
                <KeyboardDatePicker
                  format="MM/dd/yyyy"
                  label="Birthday"
                  value={props.value}
                  helperText={errors?.birthday?.message}
                  error={!!errors.birthday}
                  onChange={(e) => props.onChange(e)}
                />
              )}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: 18, marginBottom: 6 }}>
          <FormLabel component="legend" style={{ marginBottom: 2 }}>
            Hobby
          </FormLabel>
          <Controller
            as={ReactSelect}
            defaultValue={null}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            name="ReactSelect"
            isClearable
            control={control}
          />
        </FormControl>

        <FormControlLabel
          style={{ marginTop: 18 }}
          control={
            <Controller
              control={control}
              color="primary"
              name="acceptTerms"
              defaultValue={false}
              render={({ onChange, onBlur, value, name }) => (
                <Checkbox
                  onChange={(e) => onChange(e.target.checked)}
                  onBlur={onBlur}
                  checked={value}
                  name={name}
                />
              )}
            />
          }
          label="I Agree To The Term & Conditions"
        />
        {!!errors.acceptTerms && (
          <FormHelperText error={!!errors.acceptTerms}>
            Must be checked
          </FormHelperText>
        )}

        <PrimaryButton type="submit">Sign Up</PrimaryButton>
      </Form>
    </React.Fragment>
  );
};

export default SignUp;

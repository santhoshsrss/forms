import React from "react";
import { useFormik } from "formik";
import { basicScheme } from "../schema";

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};

const LoginForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: basicScheme,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <div className="form">
        <label>User Name:</label>
        <input
          id="name"
          type="name"
          placeholder="User Name"
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label>Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label>Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Passwọrd"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

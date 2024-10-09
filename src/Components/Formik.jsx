import { useFormik } from "formik";
import React from "react";
import { Schema } from "./Schema";

const Formik = () => {
  const formikInitialValues = {
    name: "",
    email: "",
    age: "",
    password: "",
    cpass: "",
  };
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formikInitialValues,
      validationSchema: Schema,
      onSubmit: (values,{resetForm}) => {
        console.log(values);
        console.log(values.name);
        console.log(values.email);
        console.log(values.age);
        console.log(values.password);
        console.log(values.cpass);
        resetForm();
      },
    });

  return (
    <div className="flex justify-center p-24 bg-orange-100">
    <div className="bg-blue-200 rounded w-2/5 text-center p-2 flex flex-col justify-center">
    <h1 className="text-6xl font-bold text-yellow-500">Formik Demo:</h1>
    <div className="flex justify-center gap-4">
        <div className="text-red-500 w-32 h-80 text-3xl font text-start flex flex-col justify-between mt-7">
        <label>Name:</label>
        <label>Email:</label>
        <label>Age:</label>
        <label>Password:</label>
        <label>Confirm:</label>
        </div>
      <form
        onSubmit={handleSubmit}
        className=" text-xl text-red-400"
      >
      
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className="text-black p-2 mt-5"
        />
        <br></br>
        {errors.name && touched.name ? (
          <span className="text-red-800">{errors.name}</span>
        ) : null}
        <br></br>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="text-black p-2"
        />
        <br></br>
        {errors.email && touched.email ? (
          <span className="text-red-800">{errors.email}</span>
        ) : null}
        <br></br>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          className="text-black p-2"
        />
        <br></br>
        {errors.age && touched.age ? (
          <span className="text-red-800">{errors.age}</span>
        ) : null}
        <br></br>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="text-black p-2"
        />
        <br></br>
        {errors.password && touched.password ? (
          <span className="text-red-800">{errors.password}</span>
        ) : null}
        <br></br>
        <input
          type="password"
          name="cpass"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cpass}
          className="text-black p-2"
        />
        <br></br>
        {errors.cpass && touched.cpass ? (
          <span className="text-red-800">{errors.cpass}</span>
        ) : null}
        <br></br>
        <input
          type="Submit"
          value="Submit"
          className="bg-black p-2 rounded text-3xl font-bold text-green-300 cursor-pointer w-48 hover:bg-violet-600 hover:text-white"
        />
      </form>
      </div>
    </div>
    </div>
  );
};

export default Formik;

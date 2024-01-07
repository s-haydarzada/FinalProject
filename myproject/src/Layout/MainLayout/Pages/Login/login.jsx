import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "./components/LoginInput";
import BreadcrumbItem from "./../../components/BreadcrumbItem/index";
import Header from "./components/Header";
import LoginBtn from "./components/LoginBtn";
import { useFormik } from "formik";

const defaultFormFields = {
  email: "",
  password: "",
};
const Login = () => {
  
  const dynamicItems = [
    {
      title: (
        <Link to={"/"} className="text-black">
          Home
        </Link>
      ),
    },
    {
      title: "Account",
      className: "text-gray-500",
    },
  ];

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { username, password } = formFields;

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields)
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password:""
    },
    onSubmit: values => {
      console.log(values);
      LoginCall(values).then((res=>{
        console.log(res)
      })).catch((err)=>{
        console.log(err)
      })
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="w-full min-h-screen pt-28">
      <BreadcrumbItem items={dynamicItems} />
      <div className="w-full flex flex-col justify-between relative items-center mx-auto max-w-screen-lg">
        <div className="pt-10 mt-10 bg-[#F3F3F3] border w-[90%] md:w-[600px] border-gray-300 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 flex flex-col justify-center items-center mb-20">
          <Header
            title="Login"
            subtitle="Please login using account details below."
          />
          <form action="" className="mt-5 w-full">
          <LoginInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <LoginInput
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <LoginBtn title="Login" returnBtn="Create Account" returnPath={"/register"}/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

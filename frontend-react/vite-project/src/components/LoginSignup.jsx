import React, { useContext, useState, useEffect } from "react";
import axios from "../axiosConfig";
import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";
import CustomTextField from "./CustomTextField";
import { useFormik } from "formik";
import { signupSchema, loginSchema } from "../constants";
import LoggedInContext from "../context/LoggedInContext";
import bgVideo from "../assets/loginSignupbgVideo.mp4";
import PleaseWait from "./PleaseWait"; // Import the PleaseWait component

const LoginSignup = () => {
  const { pathname } = useLocation();
  const [isOtpInputDisabled, setOtpInputDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Loading state for "Please Wait"
  const [loginTriggered, setLoginTriggered] = useState(false);
  const { LoggedIn, setLoggedIn } = useContext(LoggedInContext);
  const navigate = useNavigate();

  // Check login status and redirect to home if already logged in
  useEffect(() => {   
    console.log(axios.defaults.baseURL);

    axios
      .get(axios.defaults.baseURL+"/api/auth/authMiddleware")
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, [loginTriggered]);

  useEffect(() => {
    if (LoggedIn) {
      navigate("/home");
    }
  }, [LoggedIn, navigate]);

  const initialValues =
    pathname === "/login"
      ? {
          email: "",
          password: "",
        }
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          otp: "",
        };

  const validationSchema = pathname === "/login" ? loginSchema : signupSchema;

  const handleRegister = async (values) => {
    try {
      const response = await axios.post(axios.defaults.baseURL+"/api/auth/verify-otp", {
        email: values.email,
        otp: values.otp,
      });
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Failed to verify OTP. Please try again.");
    } finally {
      setIsLoading(false); // Hide the loader once OTP is sent
    }
  };

  const handleLogin = async (values) => {
    try {
      const response = await axios.post(axios.defaults.baseURL+"/api/auth/login",
        {
          email: values.email,
          password: values.password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log("Logged in Successfully");
        setLoginTriggered(true);
        formik.resetForm();
      } else {
        alert("Login failed. Please try again.");
        formik.resetForm();
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your credentials.");
    }
  };

  const handleGetOtp = async (values) => {
    try {
      setIsLoading(true); // Show the loader
      const response = await axios.post(axios.defaults.baseURL+"/api/auth/signup", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      alert("OTP sent to email");
      setOtpInputDisabled(false);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to sign up. Please try again.");
    } finally {
      setIsLoading(false); // Hide the loader once the API call finishes
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (pathname === "/login") {
        await handleLogin(values);
      } else {
        await handleRegister(values);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = formik;

  return !LoggedIn ? (
    <div className="relative flex justify-center items-center w-full h-screen overflow-x-hidden">
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="object-cover absolute top-0 left-0 w-full h-full -z-10 blur-md"
      />
      <Card css="relative">
        <form
          className="flex flex-col p-4 gap-4 min-w-96 max-w-full"
          onSubmit={handleSubmit}
        >
          {pathname === "/login" ? (
            <>
              <h2 className="text-4xl text-white pb-7">Login</h2>
              <CustomTextField
                placeholder="E-mail"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                warning={errors.email && touched.email ? errors.email : null}
                value={values.email}
              />
              <CustomTextField
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                warning={
                  errors.password && touched.password ? errors.password : null
                }
              />
              <button
                type="submit"
                className="border-2 border-solid border-white text-white p-2 rounded-lg my-2 hover:bg-[#1db8cd]"
                disabled={isSubmitting}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h2 className="text-4xl text-white pb-7">Sign up</h2>
              <CustomTextField
                placeholder="First name*"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                warning={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
              />
              <CustomTextField
                placeholder="Last name"
                name="lastName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                warning={
                  errors.lastName && touched.lastName ? errors.lastName : null
                }
              />
              <CustomTextField
                placeholder="E-mail*"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                warning={errors.email && touched.email ? errors.email : null}
                value={values.email}
              />
              <CustomTextField
                placeholder="Password*"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                warning={
                  errors.password && touched.password ? errors.password : null
                }
              />
              <CustomTextField
                placeholder="Confirm password*"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                warning={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null
                }
              />
              <button
                className="border-2 border-solid border-white text-white p-2 rounded-lg my-2 bg-[#1db8cd]"
                disabled={isSubmitting}
                onClick={(e) => {
                  e.preventDefault();
                  handleGetOtp(values);
                }}
              >
                Get OTP
              </button>
              <CustomTextField
                placeholder="OTP"
                name="otp"
                type="number"
                disabled={isOtpInputDisabled}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otp}
                warning={errors.otp && touched.otp ? errors.otp : null}
              />
              <button
                type="submit"
                className="border-2 border-solid border-white text-white p-2 rounded-lg my-2 hover:bg-[#1db8cd]"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </>
          )}
        </form>
      </Card>
      {isLoading && <PleaseWait />} 
    </div>
  ) : null;
};

export default LoginSignup;

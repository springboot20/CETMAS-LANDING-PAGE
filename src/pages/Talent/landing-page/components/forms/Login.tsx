import React, { useState } from "react";
import CETMASLOGO from "@/assets/cetmas-logo.png";
import LoginImage from "@/assets/login-image.png";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { SignUp } from "./SignUp.tsx";
import { InputField } from "@/components/forms/TextField/InputField";
import { useFormik } from "formik";

type InitialValues = {
  email: string;
  password: string;
};

const initialValues: InitialValues = {
  email: "",
  password: "",
};

export const Login: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit(values) {
      console.log(values)
    },
  });

  // const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section className="flex items-center justify-center bg-transparent p-4 sm:p-8 xl:p-0 h-screen">
        <div className="bg-white lg:bg-transparent md:shadow-lg lg:shadow-none flex-1 flex-shrink-0 max-w-xl lg:grid lg:grid-cols-2 lg:max-w-7xl gap-10 mx-auto relative">
          <header className="bg-none bg-transparent hidden lg:block overflow-auto self-center">
            <Link to="/">
              <img src={CETMASLOGO} alt="Cetmas logo" className="h-16" />
              <h1 className="text-base sm:text-2xl font-bold text-gray-800 text-center lg:text-4xl xl:text-5xl lg:leading-snug lg:text-justify xl:leading-normal">
                Bridging the Gap between <br className="hidden lg:block" /> Talents and Clients
              </h1>
            </Link>
            <div className="hidden lg:block">
              <img src={LoginImage} alt="Login logo" className="h-[35rem] w-[35rem]" />
            </div>
          </header>
          <div className="w-full xl:max-w-full lg:self-center p-8 lg:p-4">
            <header className="mx-auto text-center my-10">
              <h1 className="text-[#4632A8] font-extrabold text-2xl lg:text-4xl xl:text-6xl font-leelawadee">
                Welcome Back !
              </h1>
            </header>
            <form className="xl:space-y-16" onSubmit={handleSubmit}>
              <div className="space-y-3 lg:space-y-5">
                <fieldset className="space-y-2">
                  <InputField
                    id="email"
                    type="email"
                    htmlFor="email"
                    label="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={values.email}
                    labelClass="capitalize"
                    className="block w-full px-5 rounded-md border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
                  />
                </fieldset>

                <fieldset className="space-y-2">
                  <InputField
                    id="password"
                    type="password"
                    htmlFor="password"
                    label="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    value={values.password}
                    labelClass="capitalize"
                    className="block w-full px-5 rounded-md border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
                  />
                </fieldset>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-1">
                    <InputField
                      labelClass="hidden sr-only"
                      label="check box"
                      htmlFor="check"
                      id="check"
                      type="checkbox"
                      className="rounded-sm text-[#4632A8]"
                    />
                    <span className="text-sm font-medium text-gray-700 leading-0">Remember me</span>
                  </div>
                  <Link to={"#"} className="text-sm text-[#4632A8] font-medium">
                    forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="block py-3 w-full mt-4 bg-[#4632A8] text-white text-sm sm:text-base font-semibold rounded-md transform hover:-translate-y-1.5 transition shadow-md hover:bg-[#4632A8]/80 active:bg-[#4632A8] focus:ring-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4632A8]/70 tracking-wider sm:mt-4 md:py-2.5 lg:mx-auto xl:py-4 lg:text-lg lg:w-2/3 xl:mt-40"
              >
                Login
              </button>
            </form>
            <div className="mx-auto mt-3">
              <p className="text-center text-sm font-normal xl:text-base xl:font-bold">
                Don't have an account?{" "}
                <Button onClick={handleOpen} className="text-[#4632A8] focus:outline-none">
                  SignUp
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SignUp isOpen={isOpen} close={handleClose} />
    </>
  );
};

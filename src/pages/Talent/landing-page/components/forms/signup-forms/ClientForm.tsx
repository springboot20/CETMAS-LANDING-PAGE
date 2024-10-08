import React, { useState } from "react";
import CETMASLOGO from "@/assets/cetmas-logo.png";
import ClientImage from "@/assets/client.png";
import { AnimatePresence, motion } from "framer-motion";
import { InputField } from "@/components/forms/TextField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { FormikHelpers, useFormik } from "formik";
import { ChangeEvent, ClientFormInitialValues } from "@/util/formik";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/util";

const initialValues: ClientFormInitialValues = {
  "full-name": "",
  email: "",
  password: "",
  gender: "",
  "phone-number": "",
  website: "",
};

export const ClientForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();

  async function onSubmit(
    values: ClientFormInitialValues,
    { resetForm }: FormikHelpers<ClientFormInitialValues>,
  ) {
    console.log(values);
    await Promise.resolve(setTimeout(() => navigate("/login"), 5000));
    resetForm();
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit,
  });

  const steps: JSX.Element[] = [
    <SocialForm key={"social"} handleChange={handleChange} values={values} />,
    <ContactForm key={"contact"} handleChange={handleChange} values={values} />,
  ];

  const handleNextStep = (): void => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };
  const handlePrevStep = (): void => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="flex items-center justify-center bg-transparent p-4 sm:p-8 h-screen xl:p-0">
      <div className="bg-white border lg:bg-transparent lg:border-0 flex-1 flex-shrink-0 max-w-xl lg:grid lg:grid-cols-2 lg:max-w-6xl gap-10 mx-auto relative">
        <header className="bg-none bg-transparent hidden lg:block overflow-auto">
          <Link to="/" className="space-y-7">
            <img src={CETMASLOGO} alt="Cetmas logo" className="h-16" />

            <h1 className="text-4xl xl:text-[2.75rem] font-bold text-gray-800 lg:leading-snug xl:leading-normal">
              Hire the best Talents, Get <br className="hidden md:block" /> your projects done on
              time <br className="hidden md:block" /> and with Ease
            </h1>
          </Link>
          <div className="hidden lg:block">
            <img src={ClientImage} alt="Login logo" className="h-[30rem] w-[35rem]" />
          </div>
        </header>
        <div className="flex flex-col justify-center items-center min-h-full max-w-xl w-full overflow-hidden p-8 lg:p-0">
          <header className="mx-auto text-center my-4">
            <h1 className="text-[#4632A8] font-extrabold text-2xl xl:text-6xl font-leelawadee">
              Join Now !
            </h1>
          </header>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  {steps[currentStep]}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex py-3 gap-3 items-center text-[#4632A8] text-sm sm:text-base font-semibold rounded-md transition focus:outline-none focus:ring-0"
                  >
                    <ArrowLeftIcon className="h-5" />
                    Previous
                  </button>
                )}

                {currentStep < steps.length - 1 && (
                  <>
                    <div></div>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className={classNames(
                        "flex py-3 gap-3 items-center text-[#4632A8] text-sm sm:text-base font-semibold rounded-md transition focus:outline-none focus:ring-0",
                        currentStep < steps.length - 1 ? "justify-end" : "",
                      )}
                    >
                      Next
                      <ArrowRightIcon className="h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
            {currentStep === steps.length - 1 && (
              <button
                type="submit"
                className="block py-3 w-full mt-8 bg-[#4632A8] text-white text-sm sm:text-base font-semibold rounded-md transition focus:ring-outline-none focus:ring-0 sm:mt-4 md:py-2.5 lg:mx-auto xl:py-3.5 lg:text-lg lg:w-2/3"
              >
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const SocialForm: React.FC<{
  handleChange: ChangeEvent;
  values: {
    [key: string]: string;
  };
}> = ({ handleChange, values }) => (
  <div className="space-y-3 lg:space-y-5">
    <fieldset className="space-y-2">
      <InputField
        id="full-name"
        label="full name"
        type="text"
        htmlFor="full-name"
        placeholder="Enter full name"
        labelClass="capitalize"
        autoComplete="username"
        onChange={handleChange}
        value={values.fullName}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>
    <fieldset className="space-y-2">
      <InputField
        label="email"
        id="email"
        type="email"
        htmlFor="email"
        placeholder="Enter email"
        labelClass="capitalize"
        onChange={handleChange}
        value={values.email}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>

    <fieldset className="space-y-2">
      <InputField
        label="password"
        id="password"
        type="password"
        htmlFor="password"
        placeholder="Enter password"
        labelClass="capitalize"
        onChange={handleChange}
        value={values.password}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>
  </div>
);

const ContactForm: React.FC<{
  handleChange: ChangeEvent;
  values: {
    [key: string]: string;
  };
}> = ({ handleChange, values }) => (
  <div className="space-y-3 lg:space-y-5">
    <fieldset className="space-y-2">
      <label htmlFor="gender" className="text-sm font-semibold text-gray-700 sm:text-base block">
        Gender
      </label>
      <select
        id="gender"
        onChange={handleChange}
        value={values.gender}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      >
        <option>Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </fieldset>

    <fieldset className="space-y-2">
      <InputField
        label="phone number"
        id="phone-number"
        type="tel"
        htmlFor="phone-number"
        placeholder="Enter phone number"
        labelClass="capitalize"
        onChange={handleChange}
        value={values.phone}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>
    <fieldset className="space-y-2">
      <InputField
        htmlFor="website"
        label="company website"
        id="website"
        type="text"
        placeholder="Website link"
        labelClass="capitalize"
        onChange={handleChange}
        value={values.website}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>
  </div>
);

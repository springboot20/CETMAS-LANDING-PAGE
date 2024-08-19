import React, { useState } from "react";
import CETMASLOGO from "@/assets/cetmas-logo.png";
import TalentImage from "@/assets/talent.svg";
import { FormikHelpers, useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { InputField } from "@/components/forms/TextField/InputField";
import { ChangeEvent, TalentFormInitialValues } from "@/util/formik";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { classNames } from "@/util";

const initialValues: TalentFormInitialValues = {
  "first-name": "",
  "last-name": "",
  gender: "",
  email: "",
  password: "",
  "confirm-password": "",
  "phone-number": "",
  skills: "",
  portfolio: "",
  bio: "",
  location: "",
  profession: "",
};

export const TalentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });

  async function onSubmit(
    values: TalentFormInitialValues,
    { resetForm }: FormikHelpers<TalentFormInitialValues>,
  ) {
    console.log(values);
    await Promise.resolve(setTimeout(() => navigate("/login"), 2000));
    resetForm();
  }

  const steps: JSX.Element[] = [
    <SocialForm key={"social"} values={values} handleChange={handleChange} />,
    <AuthForm key={"auth"} values={values} handleChange={handleChange} />,
    <OtherForm key={"other-form"} values={values} handleChange={handleChange} />,
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
      <div className="bg-white lg:bg-transparent border lg:border-0 flex-1 flex-shrink-0 max-w-xl lg:grid lg:grid-cols-2 lg:max-w-6xl gap-10 mx-auto relative">
        <header className="bg-none bg-transparent hidden lg:block overflow-auto">
          <div className="space-y-4 sm:space-y-9">
            <img src={CETMASLOGO} alt="Cetmas logo" className="h-16" />
            <h1 className="text-4xl xl:text-5xl font-bold text-gray-800 text-center lg:leading-snug lg:text-justify xl:leading-normal">
              Develop your skill, Earn <br className="hidden lg:block" /> more and Build your{" "}
              <br className="hidden lg:block" /> Portfolio.
            </h1>
          </div>
          <div className="hidden lg:block">
            <img src={TalentImage} alt="Talent logo" className="h-[25rem] w-[34rem] xl:w-[45rem]" />
          </div>
        </header>
        <div className="flex flex-col justify-center items-center min-h-full max-w-xl w-full overflow-hidden p-2 md:p-8 lg:p-4">
          <header className="mx-auto text-center my-4">
            <h1 className="text-[#4632A8] font-extrabold text-2xl xl:text-5xl font-leelawadee">
              Join Now!
            </h1>
          </header>
          <form className="w-full" onSubmit={handleSubmit}>
            <div>
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
                className="capitalize block py-3 w-full mt-8 bg-[#4632A8] text-white text-sm sm:text-base font-semibold rounded-md transition shadow-md hover:bg-[#4632A8]/80 active:bg-[#4632A8] focus:ring-outline-none focus:ring-0 sm:mt-4 md:py-2.5 lg:mx-auto xl:py-3.5 lg:text-lg lg:w-2/3 "
              >
                sign up
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const SocialForm = ({
  values,
  handleChange,
}: {
  handleChange: ChangeEvent;
  values: {
    [key: string]: string;
  };
}) => (
  <div className="space-y-3 lg:space-y-5">
    <fieldset className="space-y-2">
      <InputField
        id="first-name"
        type="text"
        label="first name"
        htmlFor="first-name"
        value={values["first-name"]}
        onChange={handleChange}
        placeholder="Enter first name"
        labelClass="capitalize"
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>

    <fieldset className="space-y-2">
      <InputField
        id="last-name"
        type="text"
        label="last name"
        htmlFor="last-name"
        value={values["last-name"]}
        onChange={handleChange}
        placeholder="Enter last name"
        labelClass="capitalize"
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>

    <fieldset className="space-y-2">
      <label htmlFor="gender" className="text-sm font-semibold text-gray-700 sm:text-base block">
        Gender
      </label>
      <select
        id="gender"
        value={values.gender}
        onChange={handleChange}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      >
        <option>Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </fieldset>

    <fieldset className="space-y-2">
      <InputField
        id="email"
        type="email"
        htmlFor="email"
        label="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter email"
        labelClass="capitalize"
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-base sm:leading-6 focus:outline-none"
      />
    </fieldset>
  </div>
);

const AuthForm = ({
  values,
  handleChange,
}: {
  handleChange: ChangeEvent;
  values: {
    [key: string]: string;
  };
}) => {
  return (
    <div className="space-y-3 lg:space-y-5">
      <fieldset className="space-y-2">
        <InputField
          id="password"
          type="password"
          label="Password"
          htmlFor="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter password"
          labelClass="capitalize"
          className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
        />
      </fieldset>

      <fieldset className="space-y-2">
        <InputField
          id="confirm-password"
          type="confirm-password"
          label="confirm Password"
          htmlFor="confirm-password"
          value={values["confirm-password"]}
          onChange={handleChange}
          placeholder="Enter confirm password"
          labelClass="capitalize"
          className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
        />
      </fieldset>

      <TelephoneInput />
    </div>
  );
};

const OtherForm = ({
  values,
  handleChange,
}: {
  handleChange: ChangeEvent;
  values: {
    [key: string]: string;
  };
}) => (
  <div className="space-y-3 lg:space-y-5">
    <fieldset className="space-y-2">
      <label htmlFor="skills" className="text-sm font-semibold text-gray-700 sm:text-base block">
        Skills
      </label>
      <select
        id="skills"
        value={values.skills}
        onChange={handleChange}
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      >
        <option>List of skills</option>
      </select>
    </fieldset>

    <fieldset className="space-y-2">
      <InputField
        id="portfolio"
        type="text"
        htmlFor="portfolio"
        label="portfolio"
        value={values.portfolio}
        onChange={handleChange}
        placeholder="Link to portfolio"
        labelClass="capitalize"
        className="block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none"
      />
    </fieldset>
  </div>
);

interface CountryCode {
  code: string;
  name: string;
}

const countryCodes: CountryCode[] = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+234", name: "Nigeria" },
  { code: "+91", name: "India" },
  // Add more country codes as needed
];

export const TelephoneInput: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<string>(countryCodes[0].code);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="flex items-center border border-gray-800 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#4632A8] focus-within:border-transparent h-16">
      <div className="relative flex items-center h-full">
        <select
          value={selectedCode}
          onChange={handleCodeChange}
          className="h-full appearance-none bg-white border-none text-gray-900 pl-3 pr-8 leading-tight focus:outline-none focus:ring-0"
          style={{ width: "5rem" }} // Adjust this value to control the width
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-0 pr-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293L9.293 11.293C9.683 11.683 10.317 11.683 10.707 11.293L14.707 7.293C15.098 6.902 14.855 6.268 14.293 6.268L5.707 6.268C5.145 6.268 4.902 6.902 5.293 7.293Z" />
          </svg>
        </div>
      </div>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Enter phone number"
        className="block w-full h-full px-4 py-2 border-none focus:outline-none focus:ring-0"
      />
    </div>
  );
};

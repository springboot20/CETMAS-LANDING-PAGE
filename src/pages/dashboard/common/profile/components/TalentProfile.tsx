import { Button } from "@/components/button/Button";
import { InputField } from "@/components/forms/TextField/InputField";
import React from "react";

export const TalentProfile: React.FC = () => {
  return (
    <form action="" className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <fieldset className="space-y-2">
          <InputField
            id="first-name"
            type="text"
            htmlFor="first-name"
            label="first name"
            placeholder="Jane"
            labelClass="capitalize text-base lg:text-xl"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="last-name"
            type="text"
            htmlFor="last-name"
            label="last name"
            placeholder="Williams"
            labelClass="capitalize text-base lg:text-xl"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="phone-number"
            type="tel"
            htmlFor="phone-number"
            label="phone number"
            labelClass="capitalize text-base lg:text-xl"
            placeholder="08012345678"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="email"
            type="email"
            htmlFor="email"
            label="email address"
            labelClass="capitalize text-base lg:text-xl"
            placeholder="Janewilliams@gmail.com"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="city"
            type="text"
            htmlFor="city"
            label="city"
            labelClass="capitalize text-base lg:text-xl"
            placeholder="Ogbomoso"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="state"
            type="text"
            htmlFor="state"
            label="state"
            labelClass="capitalize text-base lg:text-xl"
            placeholder="Oyo"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <label
            htmlFor="about"
            className="capitalize text-base lg:text-xl text-gray-700 font-semibold"
          >
            bio
          </label>
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
            defaultValue={
              "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor..."
            }
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="country"
            type="text"
            htmlFor="country"
            label="country"
            labelClass="capitalize text-base lg:text-xl"
            placeholder="Nigeria"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="portfolio-link"
            type="text"
            htmlFor="portfolio-link"
            label="portfolio link"
            labelClass="capitalize text-base lg:text-xl"
            placeholder="lorem ipsum dolor st met"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>

        <fieldset className="space-y-2">
          <InputField
            id="cv"
            type="text"
            htmlFor="cv"
            label="cv"
            labelClass="uppercase text-base lg:text-xl"
            placeholder="Google drive link"
            className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
          />
        </fieldset>
      </div>

      <Button
        type="button"
        className="bg-[#4632A8] hover:bg-[#4632A8]/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4632A8]/70 active:bg-[#4632A8] transform hover:-translate-y-0.5 text-white capitalize mt-6 text-base font-normal rounded-lg py-2.5 px-5"
      >
        updated
      </Button>
    </form>
  );
};

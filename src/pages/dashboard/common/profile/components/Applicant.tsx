import { useLocation, useNavigate } from "react-router-dom";

const ApplicantProfile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-[#A79BE1]/20 rounded-2xl px-4 lg:px-8 py-7">
      <div className="max-w-2xl mx-auto grid gap-2 grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <div className="inline-flex space-x-2">
          <h3 className="capitalize text-sm font-semibold">name: </h3>
          <p className="capitalize text-sm font-normal text-gray-700">jane william</p>
        </div>

        <div className="inline-flex space-x-2 lg:place-self-end">
          <h3 className="capitalize text-sm font-semibold">talent: </h3>
          <p className="capitalize text-sm font-normal text-gray-700">product manager</p>
        </div>

        <div className="inline-flex space-x-2">
          <h3 className="capitalize text-sm font-semibold">portfolio: </h3>
          <p className="capitalize text-sm font-normal text-gray-700">
            Lorem ipsum dolor sit ametm
          </p>
        </div>

        <div className="inline-flex space-x-2 lg:place-self-end">
          <h3 className="uppercase text-sm font-semibold">cv: </h3>
          <p className="text-sm font-normal text-gray-700">Google drive link</p>
        </div>

        <div className="w-full flex items-start space-x-4 col-span-full">
          <h3 className="capitalize text-sm font-semibold">bio: </h3>
          <p className="text-sm font-normal text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur. Adipiscing varius tincidunt quisque duis aliquam
            adipiscing. Ornare cursus erat fringilla vel. Enim sit egestas pellentesque lacus.
            Aenean tellus dolor magna arcu. Magna sit elit risus id tristique tincidunt viverra.
            Tincidunt viverra aliquet in massa integer consectetur. Lorem facilisi quam mi proin
            commodo. Est facilisis bibendum nullam rhoncus dolor metus imperdiet nisl. Mattis
            malesuada maecenas ultrices mattis molestie hendrerit.
          </p>
        </div>

        <div className="w-full flex items-start space-x-4 col-span-full">
          <h3 className="capitalize text-sm font-semibold">skills: </h3>
          <ul className="grid text-sm text-gray-700 sm:grid-cols-2 gap-x-9 gap-y-2">
            <li>UI Design</li>
            <li>UX Research</li>
            <li>Wire Framing</li>
            <li>Prototyping</li>
            <li>UX Design</li>
            <li>Mockup</li>
          </ul>
        </div>

        <div className="w-full flex items-start flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-2 2xl:space-x-5 col-span-full">
          <h3 className="capitalize text-base font-semibold flex-shrink-0">employement history:</h3>
          <div className="space-y-6">
            <div className="flex items-stretch flex-col space-y-2 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
              <h4 className="capitalize text-base font-medium text-gray-700 flex-shrink-0 ">
                jan 2023 - mar 2023
              </h4>
              <div className="space-y-1">
                <h3 className="capitalize text-base font-semibold text-gray-700 flex-shrink-0">
                  Product Designer at Cephas ICT Hub
                </h3>
                <p className="text-sm text-gray-700 font-normal">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing varius tincidunt quisque duis
                  aliquam adipiscing. Ornare cursus erat fringilla
                </p>
              </div>
            </div>

            <div className="flex items-stretch flex-col space-y-2 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
              <h4 className="capitalize text-base font-medium text-gray-700 flex-shrink-0 ">
                jan 2023 - mar 2023
              </h4>
              <div className="space-y-1">
                <h3 className="capitalize text-base font-semibold text-gray-700 flex-shrink-0">
                  Product Designer at Cephas ICT Hub
                </h3>
                <p className="text-sm text-gray-700 font-normal">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing varius tincidunt quisque duis
                  aliquam adipiscing. Ornare cursus erat fringilla
                </p>
              </div>
            </div>
          </div>
        </div>

        {!(pathname.split("/")[1] === "admin") && (
          <div className="col-span-full flex justify-center items-center">
            <button
              type="button"
              onClick={() => navigate("/client/messages")}
              className="text-base capitalize px-7 py-2 font-normal transition text-white bg-[#4632A8] hover:bg-[#4632A8]/80 active:bg-[#4632A8]/80 rounded-lg"
            >
              accept
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantProfile;

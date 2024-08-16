import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/card/Card";
import { Button } from "@/components/button/Button";
import { MapPinIcon, AttachmentIcon } from "@/components/Icons";
import { useNavigate } from "react-router-dom";
// import { classNames } from "@/util";

const AdminDescription: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="mt-24 p-4 lg:px-10">
        <div className="space-y-10">
          <Card className="bg-[#A79BE1B2]/20 rounded-xl px-10">
            <header className="flex justify-between items-start">
              <div className="space-y-2">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold capitalize">
                  mobile app developer
                </h1>
                <div className=" ">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-normal text-gray-700">
                      posted 2 hour ago
                    </span>
                    <MapPinIcon />
                    <span className="text-base sm:text-lg font-normal text-gray-700">
                      united kingdom
                    </span>
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => console.log("deleted")}>
                <span className="sr-only">favorite icon</span>
                <TrashIcon className={"h-6"} />
              </button>
            </header>
            <div className="space-y-8">
              <p className="mt-5 text-base sm:text-lg font-normal text-gray-700">
                We are in search of a skilled Mobile Designer (UX/UI) who can produce a design for
                the new feature of our mobile app, 1-2 screens.
              </p>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-normal text-gray-700 capitalize">
                  requirements:
                </h3>
                <ul className="list-disc pl-7 text-base sm:text-lg font-normal text-gray-700">
                  <li>Proven experience as a Mobile Designer</li>
                  <li>
                    Strong portfolio showcasing mobile design components and full applications
                  </li>
                  <li>Proficiency in design tools such as Sketch, Figma, or Adobe XD</li>
                  <li> Excellent communication skills</li>
                  <li>Knowledge of mobile design guidelines, particularly for iOS and Android</li>
                </ul>
              </div>
              <p className="text-base sm:text-lg font-normal text-gray-700">
                If you're a passionate designer with a knack for detail and an enthusiasm for mobile
                design, we would love to hear from you
              </p>
            </div>
          </Card>

          <Card className="bg-[#A79BE1B2]/20 rounded-xl px-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0">
            <div className="col-span-full md:col-span-1">
              <h1 className="capitalize font-bold text-base sm:text-xl lg:text-3xl">attachment</h1>
              <div className="flex items-center gap-3">
                <AttachmentIcon />
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-span-full md:col-span-2">
              <h1 className="capitalize font-bold text-base sm:text-xl lg:text-3xl">skills</h1>
              <div className="flex items-center gap-2 mt-3 lg:w-[22rem] flex-wrap">
                <span className="block text-base sm:text-lg font-normal capitalize text-gray-700">
                  UI design
                </span>
                <span className="lg:ml-10 block text-base sm:text-lg font-normal capitalize text-gray-700">
                  wireframing
                </span>
                <span className="block text-base sm:text-lg font-normal capitalize text-gray-700">
                  user empathy
                </span>
                <span className="block text-base sm:text-lg font-normal capitalize text-gray-700">
                  user experience design
                </span>
                <span className="block text-base sm:text-lg font-normal capitalize text-gray-700">
                  mockup
                </span>
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <h1 className="capitalize font-bold text-base sm:text-xl lg:text-3xl">
                project duration
              </h1>
              <p className="text-base sm:text-lg font-normal text-gray-700 capitalize mt-2">
                3 months
              </p>
            </div>
          </Card>

          <Button
            onClick={async () => navigate("/admin/recommended-talents")}
            className="capitalize text-[#4632A8] rounded-lg ring-[#4632A8] ring-1 text-base lg:text-lg font-normal px-4 py-2.5"
          >
            recommend talent
          </Button>
        </div>
      </section>
    </>
  );
};

export default AdminDescription;

import { Card } from "@/components/card/Card";
import { Button } from "@/components/button/Button";
import React, { useRef, useState } from "react";
import { MapPinIcon, AttachmentIcon } from "@/components/Icons";
import { HeartIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/util";
import { Modal } from "@/components/modal/Modal";

 const JobDescription: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const fileExtensions: string[][] = [
    [".png", ".jpeg"],
    [".jpg", ".svg"],
  ];

  const [favorite, setFavorite] = useState<boolean>(false);

  const formData = new FormData();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const isFileExtValid = (fileExt: string): boolean => {
    return fileExtensions.some((ext) => ext.includes(fileExt));
  };

  const handleApply = () => {
    if (selectedFile) {
      const fileExt = selectedFile.name.split(".").pop();
      if (fileExt) {
        if (!isFileExtValid(`.${fileExt}`)) {
          alert("Invalid file extension");
          return;
        }
      }
    }

    formData.append("attachment", selectedFile as Blob);

    console.log(selectedFile);
  };

  return (
    <>
      <Modal isOpen={isOpen} close={handleClose} />
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
              <button type="button" onClick={() => setFavorite((prev) => !prev)}>
                <span className="sr-only">favorite icon</span>
                <HeartIcon className={classNames(favorite ? "fill-slate-950" : "", "h-10")} />
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
              <div className="flex items-center">
                <fieldset className="flex items-center gap-1 mt-3">
                  <label
                    htmlFor="attachment"
                    className="relative flex items-center gap-2 cursor-pointer rounded-md font-semibold text-gray-600 focus-within:outline-none focus-within:ring-0 hover:text-gray-500"
                  >
                    <AttachmentIcon />
                    <input
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      id="attachment"
                      name="attachment"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  {selectedFile ? (
                    <span className="text-sm font-normal text-ellipsis text-gray-700">{selectedFile.name}</span>
                  ) : (
                    <>
                      <span className="text-sm">Attach a file</span>
                      <p className="pl-1 text-sm text-gray-700">or drag and drop</p>
                    </>
                  )}
                </fieldset>
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
            onClick={async () => {
              handleApply();
              await Promise.resolve(setTimeout(() => handleOpen(), 2000));
            }}
            className="capitalize text-[#4632A8] rounded-xl ring-[#4632A8] ring-1 text-base lg:text-lg font-normal px-8 py-3"
          >
            apply now
          </Button>
        </div>
      </section>
    </>
  );
};

export default JobDescription
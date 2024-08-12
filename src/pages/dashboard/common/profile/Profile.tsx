import React, { useState, useRef } from "react";
import { PencilIcon } from "@/components/Icons";
import { Card } from "@/components/card/Card";
import { classNames, isFileExtValid } from "@/util";
import { Switch } from "@headlessui/react";
import profile from "@/assets/profile-picture.jpg";

export const Profile: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<File>(null!);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileExtensions: string[][] = [
    [".png", ".jpeg"],
    [".jpg", ".svg"],
  ];

  const formData = new FormData();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfilePicture(event.target.files[0]);
    }

    const fileExt = profilePicture.name.split(".").pop();
    const extExists = isFileExtValid(fileExtensions, `.${fileExt}`);

    if (!extExists) {
      alert("Invalid file extension");
    } else {
      formData.append("profile-picture", profilePicture as Blob);
    }
  };

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <section className="mt-32 px-4 xl:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-14">
        <div className="space-y-10 col-span-full lg:col-span-2">
          <div className="flex items-center justify-center flex-col">
            <div className="relative">
              <div className="h-64 w-64 relative rounded-full overflow-hidden border-2">
                {profilePicture ? (
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="upload"
                    className="object-cover absolute h-full w-full"
                  />
                ) : (
                  <img
                    src={profile}
                    alt="profile picture"
                    className="object-cover absolute h-full w-full"
                  />
                )}
              </div>
              <div className="text-center">
                <label
                  htmlFor="photo-upload"
                  className="relative cursor-pointer rounded-md font-semibold "
                >
                  <span className="hidden sr-only">Upload photo</span>
                  <input
                    type="file"
                    id="photo-upload"
                    name="photo-upload"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (fileInputRef.current) fileInputRef.current.click();
                  }}
                  className="peer absolute bottom-11 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#4632A8] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <span className="sr-only">edit profile</span>
                  <PencilIcon />
                </button>
                <span className='before:absolute before:content-[" "] before:h-0 before:w-0 before:left-1/2 before:-translate-x-1/2 before:-top-4 before:border-l-transparent before:border-r-transparent before:border-b-white before:border-b-[15px] before:border-l-[10px] before:border-r-[10px] border peer-hover:opacity-100 peer-hover:scale-100 z-20 relative top-4 scale-0 left-44 transition opacity-0 text-base w-[15rem] origin-center rounded-md p-2 bg-white text-indigo-600 hover:text-indigo-500 font-bold'>
                  Upload photo
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-base font-bold sm:text-lg capitalize lg:text-xl">
                jane william
              </h3>
              <p className="text-base font-medium text-gray-800 sm:text-xl lg:text-xl capitalize">
                product designer
              </p>
            </div>
          </div>

          <Card className="flex items-center justify-between bg-[#A79BE1B2]/20 rounded-xl px-10 py-8">
            <div>
              <h1 className="text-lg lg:text-xl font-bold capitalize text-gray-800">
                availability
              </h1>
              <span className="inline-block text-xs sm:text-sm font-normal text-gray-700 capitalize">
                {active ? "available to work" : "unavailable to work"}
              </span>
            </div>
            <div>
              <Switch
                checked={active}
                onChange={handleActive}
                className={classNames(
                  "relative appearance-none w-[44px] h-[22px] rounded-[20px] shadow-sm",
                  active
                    ? "after:left-[calc(100%-22px)] bg-[#4632A8] after:bg-white"
                    : "after:left-0 bg-[#f3f3f3] after:bg-transparent border border-[#4632A8] ",
                  " after:absolute after:h-[22px] after:w-[22px] after:border after:border-[#4632A8] after:rounded-full after:top-1/2 after:-translate-y-1/2 after:scale-[0.7] after:transition",
                )}
              ></Switch>
            </div>
          </Card>
          <Card className="flex items-center justify-between bg-[#A79BE1B2]/20 rounded-xl px-10 py-8">
            <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 capitalize">
              jobs done
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
              10
            </p>
          </Card>
        </div>

        <div className="col-span-full lg:col-span-3 p-2">{children}</div>
      </div>
    </section>
  );
};

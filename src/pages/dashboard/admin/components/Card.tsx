import React from "react";
import { MapPinIcon } from "@/components/Icons";
import { Button } from "@/components/button/Button";
import { TalentJobProps } from "@/types/jobs";
// import { classNames } from "@/util";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export const AdminJobCard: React.FC<TalentJobProps> = (props) => {
  // const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-[#A79BE1B2]/20 rounded-xl p-6 md:p-10"
      onClick={() => navigate("/admin/jobs/:id")}
    >
      <header className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-3xl font-bold capitalize">{props.title}</h1>
          <div className="flex items-center gap-2">
            <MapPinIcon />
            <span className="text-base capitalize">{props.location}</span>
          </div>
        </div>
        <button type="button" onClick={() => console.log("deleted")}>
          <span className="sr-only">favorite icon</span>
          <TrashIcon className={"h-6"} strokeWidth={1} />
        </button>
      </header>
      <div className="py-7">
        <p className="font-normal text-base text-gray-700">{props.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Button severity="secondary" size="small" className="px-4 py-1.5">
            <span> {props.duration} months </span>
          </Button>
          <Button severity="secondary" size="small" className="px-4 py-1.5 capitalize">
            <span> {props.level} </span>
          </Button>
          <Button severity="secondary" size="small" className="px-4 py-1.5 capitalize">
            {props.type}
          </Button>
        </div>
        <p className="text-sm font-normal">Posted {props.postTime} hours ago</p>
      </div>
    </div>
  );
};

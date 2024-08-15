import React from "react";
import { useNavigate } from "react-router-dom";

export const Clients: React.FC = () => {
  return (
    <section className="mt-32 px-4 lg:px-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </section>
  );
};

export const ClientCard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 rounded-2xl bg-white border shadow-sm flex flex-col space-y-10 items-center justify-center">
      <div>
        <div className="h-36 w-36 rounded-full border bg-white"></div>
      </div>

      <div className="text-center">
        <h3 className="capitalize text-base sm:text-lg lg:text-2xl font-bold">jane willams</h3>
        <h2 className="text-base sm:text-lg lg:text-xl capitalize font-bold">
          mobile app developer
        </h2>
      </div>

      <div className="flex jusify-center items-center mx-auto">
        <button
          onClick={() => navigate("/admin/clients/:id")}
          className="px-8 text-base sm:text-lg font-normal py-2.5 text-white rounded-lg bg-[#4632A8] focus:border-0 focus:ring-2 focus:ring-offset-1 focus:ring-[#4632A8] hover:bg-[#4632A8]/80 transition active:bg-[#4632A8]"
        >
          View profile
        </button>
      </div>
    </div>
  );
};
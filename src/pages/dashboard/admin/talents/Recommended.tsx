import React from "react";

const RecommendedTalents: React.FC = () => {
  return (
    <section className="mt-32 px-4 lg:px-10">
      <div className="mx-auto">
        <h1 className="text-base sm:text-xl lg:text-2xl font-semibold mb-4">List of Talents</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
          <TalentCard />
        </div>
      </div>
    </section>
  );
};

export default RecommendedTalents;

const TalentCard = () => {

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
          onClick={() =>console.log("recommended")}
          className="px-6 text-base capitalize sm:text-lg font-normal py-2.5 text-white rounded-lg bg-[#4632A8] focus:border-0 focus:ring-0 hover:bg-[#4632A8]/80 transition active:bg-[#4632A8]"
        >
          recommended
        </button>
      </div>
    </div>
  );
};

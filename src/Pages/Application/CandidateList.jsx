import React from "react";

const CandidateList = ({ candidate }) => {
  const {
    _id,
    name,
    status,
    imgURL,
    experience,
    expectedSalary,
    applicationTime,
    role,
    gender,
  } = candidate;

  const date = new Date(applicationTime);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);

  const formattedDate = `${day}/${month}/${year}`;
  return (
    <>
      <div className="bg-white px-6 py-2 mb-4 rounded-md">
        <div className="grid grid-cols-3 items-center">
          <div className="flex">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img class="w-full h-full object-cover" src={imgURL} alt="" />
            </div>
            <div className="grid pt-4 px-2">
              <p className="font-semibold text-sm">{name}</p>
              <div className="flex font-medium text-xs text-[#7B7B7B]">
                <p className="pr-2 border-r-2 border-[#7B7B7B]">
                  {experience} years exp.
                </p>
                <p className="pl-2">Expected {expectedSalary}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-[#11998E] text-sm font-semibold">
              {status}
            </p>
          </div>
          <div>
            <p className="text-right text-[#7B7B7B] text-xs font-bold">
            {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateList;

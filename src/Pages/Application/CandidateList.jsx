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
      <div className="bg-white px-6 py-2 mb-4 rounded-md hover:bg-root-100 text-[#11998E] hover:text-black">
        <div className="grid grid-cols-3 items-center">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={imgURL} alt="" />
            </div>
            <div className="grid  items-center">
              <p className="font-semibold text-sm p-0 m-0 text-[#060709]">{name}</p>
              <div className="flex font-medium text-xs text-gray-text">
                <p className="p-0 m-0 pr-2  border-r-2 border-gray-text">
                  {experience} years exp.
                </p>
                <p className="pl-2">Expected {expectedSalary}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center   text-sm font-semibold">
              {status}
            </p>
          </div>
          <div>
            <p className="text-right text-gray-text text-xs font-bold">
            {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateList;

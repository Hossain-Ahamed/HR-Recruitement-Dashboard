import React, { useState } from 'react';

const DropDown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#B9F2E5] text-black font-medium text-xs py-2 px-4 rounded-md inline-flex items-center"
      >
        {selectedOption ? selectedOption.position : 'Select a position'}
        <svg
          className="fill-current h-6 w-6 ml-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option._id}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.position}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
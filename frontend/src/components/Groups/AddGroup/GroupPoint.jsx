import React from "react";

const GroupPoint = ({ id, heading, description, handleInputChange, inputHeadingName, inputDescName }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Point {id}</h2>
      <div className="flex mt-1 gap-2">
        <div className="w-[40%] h-full">
          <input
            type="text"
            name={inputHeadingName} // Use the passed name for heading
            value={heading} // Use the heading prop
            className="rounded-md px-4 py-[1.8rem] mt-3 w-full border text-xl"
            placeholder="Heading"
            onChange={handleInputChange}
          />
        </div>
        <div className="w-[60%]">
          <textarea
            type="text"
            name={inputDescName} // Use the passed name for description
            value={description} // Use the description prop
            className="rounded-md p-4 mt-3 w-full border text-xl"
            placeholder="Description"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default GroupPoint;
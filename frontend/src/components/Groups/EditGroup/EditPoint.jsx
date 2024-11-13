import React from "react";

const EditPoint = ({ id, heading, description, handleInputChange, inputHeadingName, inputDescName }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Point {id}</h2>
      <div className="flex mt-1 gap-2">
        <div className="w-[40%] h-full">
          <input
            type="text"
            name={inputHeadingName} 
            value={heading} 
            className="rounded-md px-4 py-[1.8rem] mt-3 w-full border text-xl"
            placeholder="Heading"
            onChange={handleInputChange}
  
          />
        </div>
        <div className="w-[60%]">
          <textarea
            type="text"
            name={inputDescName} 
            value={description} 
            className="rounded-md p-4 mt-3 w-full border text-xl"
            placeholder="Description"
            onChange={handleInputChange}          
          />
        </div>
      </div>
    </>
  );
};

export default EditPoint;
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const GroupCards = ({ title, members, isPublic, keyValue,id, image_url }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (token) {
      setAdmin(true);
    }
  }, [token, navigate]);
  return (
    <div key={keyValue} className="w-[25rem] h-[25rem] rounded-md shadow-md bg-[#008590] hover:bg-[#008590] hover:shadow-inner cursor-pointer gap-2 flex flex-col items-center relative p-3 text-white"
    style={{ background: 'linear-gradient(to right, rgb(205, 240, 244), rgb(241, 253, 251), rgb(255, 255, 255), rgb(254, 250, 239), rgb(254, 246, 225))' }}
    >
      <p className="text-[1.2rem] text-secondary absolute right-4 font-semibold ">
        {isPublic ? "Public" : "Private"}
      </p>
      <div className="w-[11.5rem] h-[11.5rem] rounded-full overflow-hidden mt-7">
        <img src={image_url} alt="" className="w-full h-full object-cover" />
      </div>
      <h4 className="text-3xl font-inter text-[#000] font-semibold truncate">
        {title.length > 24 ? title.slice(0, 23) + "..." : title}
      </h4>
      <h5 className="text-xl">{members?.length} members</h5>
      <div className="flex gap-4">
        <button
          className="text-[1.2rem]  bg-[#007481e9] px-7 py-2 rounded-[4rem] shadow-xl z-[6] hover:bg-[#0095b3] hover:text-white transition ease-in"
          onClick={() => {            
            navigate(`/groups/visit/${id}`);
          }}
          disabled={isPublic ? false : true}
        >
          Visit
        </button>
        <button
          className={`${
            admin
              ? "block text-[1.2rem] border-[2px] border-[#4f7a63] px-7 py-2 rounded-[4rem] shadow-xl z-[6] hover:bg-white text-black transition ease-in"
              : "hidden"
          }`}
          onClick={() => {
            console.log("Navigating to group with ID:", id); 
            navigate(`/admin/editGroup/${id}`);
          }}
          >
          Edit
        </button>
      </div>
    </div>
  );
};

export default GroupCards;

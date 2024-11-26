import React from "react";
import { assets } from "../../assets/assets";

const MembersUi = ({ url }) => {
  return (
    <div className="w-28 h-28 text-[#102316] rounded-full flex justify-center items-center rounded-ull overflow-hidden">
      <img src={url} alt="" className="w-full h-full" />
    </div>
  );
};

export default MembersUi;

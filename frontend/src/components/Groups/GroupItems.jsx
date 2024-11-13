import React from "react";

const GroupItems = ({ title, children,colort,colord }) => {
  return (
    <>
      <dt className={`font-semibold text-[1.7rem] ${colort}`}>{title}</dt>
      <dd className={`text-[1.6rem] ${colord}`}>{children}</dd>
    </>
  );
};

export default GroupItems;
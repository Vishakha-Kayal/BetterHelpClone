import React from "react";

export const ChallengeItem = ({ title, children }) => (
  <>
    <dt className="font-semibold text-[1.6rem]">{title}</dt>
    <dd className="text-[1.4rem]">{children}</dd>
  </>
);
export const ChallengeHeading = ({ title }) => (
  <h2 className="text-[3.5rem] text-[#444444] leading-[4.7rem] tracking-tight font-overpass font-light my-8 lg:leading-[5.6rem] lg:text-[4.5rem]">
    {title}
  </h2>
);


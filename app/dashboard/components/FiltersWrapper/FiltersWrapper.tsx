/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className?: any;
}

export const FiltersWrapper = ({ className }: Props): JSX.Element => {
  return (
    <div className={`relative w-[248px] h-[900px] bg-white shadow-[4px_0px_10px_#b7dbf029] ${className}`}>
      <div className="absolute top-[22px] left-[15px] [font-family:'Lato',Helvetica] font-black text-primary text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Filtres
      </div>
      <img
        className="absolute w-[218px] h-px top-[62px] left-[15px] object-cover"
        alt="Line"
        src="/img/line-60-1.svg"
      />
    </div>
  );
};

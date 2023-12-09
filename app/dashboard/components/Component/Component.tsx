/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
}

export const Component = ({ className, text = "Title" }: Props): JSX.Element => {
  return (
    <div className={`relative w-[1142px] h-[506px] bg-[#ffffff] rounded-[6px] ${className}`}>
      <div className="absolute top-[29px] left-[30px] [font-family:'Lato',Helvetica] font-black text-primary text-[18px] tracking-[0] leading-[normal]">
        {text}
      </div>
    </div>
  );
};

Component.propTypes = {
  text: PropTypes.string,
};

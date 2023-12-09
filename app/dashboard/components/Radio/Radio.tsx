/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1?: boolean;
  className?: any;
  text?: string;
  text1?: string;
}

export const Radio = ({ property1, className, text = "Radio 1", text1 = "Radio 2" }: Props): JSX.Element => {
  return (
    <div className={`w-[198px] h-[18px] relative ${className}`}>
      <div className="[font-family:'Lato',Helvetica] w-[170px] left-[28px] tracking-[0] text-[12px] top-px text-primary font-normal leading-[normal] absolute">
        {!property1 && <>{text}</>}

        {property1 && <>{text1}</>}
      </div>
      <div className="border border-solid border-primary-l60 w-[18px] left-0 top-0 h-[18px] rounded-[9px] absolute">
        {property1 && <div className="relative w-[10px] h-[10px] top-[3px] left-[3px] bg-secondary rounded-[5px]" />}
      </div>
    </div>
  );
};

Radio.propTypes = {
  property1: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};

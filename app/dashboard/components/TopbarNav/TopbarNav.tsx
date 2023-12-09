/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "nav";
  property2: "two" | "three" | "one";
  className: any;
}

export const TopbarNav = ({ property1, property2, className }: Props): JSX.Element => {
  return (
    <div className={`w-[523px] h-[38px] rounded-[50px] bg-primary-l10 relative ${className}`}>
      <div
        className={`absolute ${property2 === "one" ? "[font-family:'Lato',Helvetica]" : ""} ${
          ["three", "two"].includes(property2) ? "w-[166px]" : ""
        } ${property2 === "two" ? "left-[177px]" : property2 === "three" ? "left-[351px]" : "left-[194px]"} ${
          property2 === "one" ? "tracking-[0]" : ""
        } ${property2 === "one" ? "text-[14px]" : ""} ${property2 === "one" ? "top-[10px]" : "top-[4px]"} ${
          property2 === "one" ? "text-white" : ""
        } ${["three", "two"].includes(property2) ? "h-[30px]" : ""} ${property2 === "one" ? "font-normal" : ""} ${
          property2 === "one" ? "text-center" : ""
        } ${["three", "two"].includes(property2) ? "rounded-[30px]" : ""} ${
          ["three", "two"].includes(property2) ? "bg-primary-l60" : ""
        } ${property2 === "one" ? "leading-[normal]" : ""}`}
      >
        {property2 === "one" && <>Parutions au planning</>}

        {["three", "two"].includes(property2) && (
          <div
            className={`[font-family:'Lato',Helvetica] tracking-[0] text-[14px] top-[6px] text-primary font-normal text-center leading-[normal] absolute ${
              property2 === "three" ? "left-[20px]" : "left-[17px]"
            }`}
          >
            {property2 === "two" && <>Parutions au planning</>}

            {property2 === "three" && <>Réglages disponibles</>}
          </div>
        )}
      </div>
      <div
        className={`[font-family:'Lato',Helvetica] tracking-[0] text-[14px] top-[10px] text-white absolute font-normal text-center leading-[normal] ${
          ["three", "two"].includes(property2) ? "w-[138px]" : ""
        } ${property2 === "one" ? "left-[366px]" : "left-[20px]"}`}
      >
        {property2 === "one" && <>Réglages disponibles</>}

        {["three", "two"].includes(property2) && <>Reporting</>}
      </div>
      <div
        className={`absolute ${["three", "two"].includes(property2) ? "[font-family:'Lato',Helvetica]" : ""} ${
          property2 === "one" ? "w-[168px]" : ""
        } ${property2 === "two" ? "left-[366px]" : property2 === "three" ? "left-[194px]" : "left-[5px]"} ${
          ["three", "two"].includes(property2) ? "tracking-[0]" : ""
        } ${["three", "two"].includes(property2) ? "text-[14px]" : ""} ${
          property2 === "one" ? "top-[4px]" : "top-[10px]"
        } ${["three", "two"].includes(property2) ? "text-white" : ""} ${property2 === "one" ? "h-[30px]" : ""} ${
          ["three", "two"].includes(property2) ? "font-normal" : ""
        } ${["three", "two"].includes(property2) ? "text-center" : ""} ${
          ["three", "two"].includes(property2) ? "leading-[normal]" : ""
        }`}
      >
        {property2 === "one" && (
          <div className="relative w-[166px] h-[30px] bg-primary-l60 rounded-[30px]">
            <div className="absolute w-[138px] top-[7px] left-[15px] [font-family:'Lato',Helvetica] font-normal text-primary text-[14px] text-center tracking-[0] leading-[normal]">
              Reporting
            </div>
          </div>
        )}

        {property2 === "two" && <>Réglages disponibles</>}

        {property2 === "three" && <>Parutions au planning</>}
      </div>
    </div>
  );
};

TopbarNav.propTypes = {
  property1: PropTypes.oneOf(["nav"]),
  property2: PropTypes.oneOf(["two", "three", "one"]),
};

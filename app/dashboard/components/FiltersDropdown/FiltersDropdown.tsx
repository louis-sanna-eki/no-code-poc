/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowDropDown24Px4 } from "../../icons/ArrowDropDown24Px4";

interface Props {
  property1: "dropdown";
  property2: "label" | "simple" | "open";
  className: any;
  text: string;
  text1: string;
}

export const FiltersDropdown = ({
  property1,
  property2,
  className,
  text = "Dropdown",
  text1 = "Label",
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[218px] relative ${property2 === "simple" ? "border border-solid" : ""} ${
        property2 === "simple" ? "border-primary-l70" : ""
      } ${property2 === "simple" ? "h-[37px]" : property2 === "open" ? "h-[148px]" : "h-[56px]"} ${
        property2 === "simple" ? "bg-white" : ""
      } ${className}`}
    >
      {["label", "open"].includes(property2) && (
        <div
          className={`border border-solid border-primary-l70 w-[218px] left-0 h-[37px] bg-white absolute ${
            property2 === "label" ? "top-[19px]" : "top-0"
          }`}
        >
          <ArrowDropDown24Px4 className="!absolute !w-[20px] !h-[24px] !top-[6px] !left-[191px]" color="#144561" />
          <div className="[font-family:'Lato',Helvetica] w-[147px] left-[12px] tracking-[0] text-[12px] top-[9px] text-primary font-bold leading-[normal] absolute">
            {text}
          </div>
        </div>
      )}

      {property2 === "simple" && (
        <ArrowDropDown24Px4 className="!absolute !w-[20px] !h-[24px] !top-[6px] !left-[191px]" color="#144561" />
      )}

      {["label", "simple"].includes(property2) && (
        <div
          className={`[font-family:'Lato',Helvetica] tracking-[0] text-primary leading-[normal] absolute ${
            property2 === "simple" ? "w-[147px]" : "w-[142px]"
          } ${property2 === "simple" ? "left-[12px]" : "left-0"} ${
            property2 === "simple" ? "text-[12px]" : "text-[11px]"
          } ${property2 === "simple" ? "top-[9px]" : "-top-px"} ${
            property2 === "simple" ? "font-bold" : "font-normal"
          }`}
        >
          {property2 === "label" && <>{text1}</>}

          {property2 === "simple" && <>{text}</>}
        </div>
      )}

      {property2 === "open" && (
        <>
          <div className="absolute w-[217px] h-[111px] top-[37px] left-px bg-white">
            <div className="absolute w-[217px] h-[37px] top-0 left-0 bg-primary-l70">
              <div className="absolute top-[11px] left-[10px] [font-family:'Lato',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                Choise 1
              </div>
            </div>
            <div className="absolute top-[48px] left-[10px] [font-family:'Lato',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
              Choise 2
            </div>
            <div className="absolute top-[85px] left-[10px] [font-family:'Lato',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
              Choise 3
            </div>
          </div>
          <div className="absolute w-[142px] top-[-25px] left-0 [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] tracking-[0] leading-[normal]">
            {text1}
          </div>
        </>
      )}
    </div>
  );
};

FiltersDropdown.propTypes = {
  property1: PropTypes.oneOf(["dropdown"]),
  property2: PropTypes.oneOf(["label", "simple", "open"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

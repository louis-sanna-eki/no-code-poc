/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1?: "pair" | "im-pair";
  divClassName?: any;
  divClassNameOverride?: any;
  className?: any;
  text?: string;
  divClassName1?: any;
  divClassName2?: any;
  divClassName3?: any;
  text1?: string;
  text2?: string;
  text3?: string;
  hasDiv?: boolean;
  visible?: boolean;
  hasDiv1?: boolean;
  hasDiv2?: boolean;
  hasDiv3?: boolean;
  hasDiv4?: boolean;
}

export const DashboardMacro = ({
  property1,
  divClassName,
  divClassNameOverride,
  className,
  text = "CA TTC",
  divClassName1,
  divClassName2,
  divClassName3,
  text1 = "426k €",
  text2 = "4,6M €",
  text3 = "5,4M €",
  hasDiv = true,
  visible = true,
  hasDiv1 = true,
  hasDiv2 = true,
  hasDiv3 = true,
  hasDiv4 = true,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[1105px] h-[23px] ${property1 === "pair" ? "bg-f-6f-9fc" : ""} ${
        property1 === "pair" ? "relative" : ""
      } ${className}`}
    >
      {property1 === "pair" && (
        <>
          <div className="absolute top-[4px] left-[14px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            {text}
          </div>
          <div className="absolute top-[4px] left-[236px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            {text1}
          </div>
          <div
            className={`absolute top-[4px] left-[523px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap ${divClassName}`}
          >
            {text2}
          </div>
          <div
            className={`absolute top-[4px] left-[838px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap ${divClassNameOverride}`}
          >
            {text3}
          </div>
          <div className="left-[339px] absolute top-[4px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            3%
          </div>
          <div className="absolute top-[4px] left-[644px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            4%
          </div>
          <div className="absolute top-[4px] left-[959px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            2%
          </div>
          <div className="left-[435px] absolute top-[4px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            3%
          </div>
          <div className="absolute top-[4px] left-[753px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            0%
          </div>
          <div className="left-[1068px] absolute top-[4px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            3%
          </div>
        </>
      )}

      {property1 === "im-pair" && (
        <div className="relative h-[23px]">
          <div className="absolute top-[4px] left-[14px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            {text}
          </div>
          <div
            className={`absolute top-[4px] left-[236px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap ${divClassName3}`}
          >
            {text1}
          </div>
          <div
            className={`absolute top-[4px] left-[523px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap ${divClassName1}`}
          >
            {text2}
          </div>
          <div
            className={`absolute top-[4px] left-[838px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap ${divClassName2}`}
          >
            {text3}
          </div>
          {hasDiv && (
            <div className="left-[339px] absolute top-[4px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              3%
            </div>
          )}

          {visible && (
            <div className="absolute top-[4px] left-[644px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              4%
            </div>
          )}

          {hasDiv1 && (
            <div className="absolute top-[4px] left-[959px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              2%
            </div>
          )}

          {hasDiv2 && (
            <div className="left-[435px] absolute top-[4px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              3%
            </div>
          )}

          {hasDiv3 && (
            <div className="absolute top-[4px] left-[753px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              0%
            </div>
          )}

          {hasDiv4 && (
            <div className="left-[1068px] absolute top-[4px] [font-family:'Lato',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              3%
            </div>
          )}
        </div>
      )}
    </div>
  );
};

DashboardMacro.propTypes = {
  property1: PropTypes.oneOf(["pair", "im-pair"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  hasDiv: PropTypes.bool,
  visible: PropTypes.bool,
  hasDiv1: PropTypes.bool,
  hasDiv2: PropTypes.bool,
  hasDiv3: PropTypes.bool,
  hasDiv4: PropTypes.bool,
};

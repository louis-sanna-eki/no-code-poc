/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1?: "btn";
  property2?: "active" | "normal";
  className?: any;
  text?: string;
  text1?: string;
}

export const PageNav = ({
  property1,
  property2,
  className,
  text = "PARUTIONS RÉGLÉES",
  text1 = "ARCHIVES",
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[226px] h-[43px] relative ${
        property2 === "normal" ? "bg-secondary-l30" : "bg-secondary"
      } ${className}`}
    >
      <div className="[font-family:'Lato',Helvetica] w-[196px] left-[16px] tracking-[0] text-[13px] top-[13px] text-primary font-bold text-center leading-[normal] absolute">
        {property2 === "active" && <>{text}</>}

        {property2 === "normal" && <>{text1}</>}
      </div>
    </div>
  );
};

PageNav.propTypes = {
  property1: PropTypes.oneOf(["btn"]),
  property2: PropTypes.oneOf(["active", "normal"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

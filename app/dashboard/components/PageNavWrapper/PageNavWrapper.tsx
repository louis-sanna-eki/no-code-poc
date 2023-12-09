/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PageNav } from "../PageNav";

interface Props {
  className: any;
  pageNavText: string;
  pageNavText1: string;
}

export const PageNavWrapper = ({
  className,
  pageNavText = "PARUTIONS RÉGLÉES",
  pageNavText1 = "ARCHIVES",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[1440px] h-[43px] bg-white ${className}`}>
      <PageNav className="!absolute !left-0 !top-0" property1="btn" property2="active" text={pageNavText} />
      <PageNav className="!absolute !left-[226px] !top-0" property1="btn" property2="normal" text1={pageNavText1} />
    </div>
  );
};

PageNavWrapper.propTypes = {
  pageNavText: PropTypes.string,
  pageNavText1: PropTypes.string,
};

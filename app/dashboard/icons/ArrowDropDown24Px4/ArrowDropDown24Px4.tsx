/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color?: string;
  opacity?: string;
  className?: any;
}

export const ArrowDropDown24Px4 = ({ color = "#144561", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 9.5L12 14.5L17 9.5H7Z" fill={color} fillOpacity={opacity} />
    </svg>
  );
};

ArrowDropDown24Px4.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};

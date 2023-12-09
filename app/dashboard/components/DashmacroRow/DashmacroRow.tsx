/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1?: "im-pair" | "pair";
  divClassName?: any;
  elementClassName?: any;
  text?: string;
  divClassNameOverride?: any;
  elementClassNameOverride?: any;
  spanClassName?: any;
  text1?: string;
  elementKClassName?: any;
  spanClassNameOverride?: any;
  text2?: string;
  elementKClassNameOverride?: any;
  spanClassName1?: any;
  className?: any;
}

export const DashmacroRow = ({
  property1,
  divClassName,
  elementClassName,
  text = "Janvier",
  divClassNameOverride,
  elementClassNameOverride,
  spanClassName,
  text1 = " (+12%)",
  elementKClassName,
  spanClassNameOverride,
  text2 = "(+12%)",
  elementKClassNameOverride,
  spanClassName1,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`w-[1111px] h-[28px] relative ${property1 === "pair" ? "bg-f-6f-9fc" : ""} ${className}`}>
      <div className="[font-family:'Lato',Helvetica] left-[6px] tracking-[0] text-[11px] top-[7px] text-primary font-normal leading-[normal] whitespace-nowrap absolute">
        {text}
      </div>
      <div className="[font-family:'Lato',Helvetica] left-[96px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        18
      </div>
      <div className="[font-family:'Lato',Helvetica] left-[143px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        585k
      </div>
      <div className="[font-family:'Lato',Helvetica] left-[199px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        257k
      </div>
      <div className="[font-family:'Lato',Helvetica] left-[256px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        36.3%
      </div>
      <div
        className={`[font-family:'Lato',Helvetica] left-[311px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "im-pair" ? divClassNameOverride : property1 === "pair" ? divClassName : undefined
        }`}
      >
        1 138k€
      </div>
      <div className="[font-family:'Lato',Helvetica] left-[376px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        892k €
      </div>
      <p
        className={`[font-family:'Lato',Helvetica] left-[433px] tracking-[0] text-[11px] top-[7px] text-transparent font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "im-pair" ? elementClassNameOverride : property1 === "pair" ? elementClassName : undefined
        }`}
      >
        <span className="text-[#144561]">280k€ </span>
        <span className={`text-[#00a878] ${property1 === "im-pair" ? spanClassName : undefined}`}>{text1}</span>
      </p>
      <div className="[font-family:'Lato',Helvetica] left-[540px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        36.3%
      </div>
      <div className="[font-family:'Lato',Helvetica] left-[903px] tracking-[0] text-[11px] top-[7px] text-primary font-normal text-right whitespace-nowrap leading-[normal] absolute">
        36.3%
      </div>
      <p
        className={`[font-family:'Lato',Helvetica] left-[588px] tracking-[0] text-[11px] top-[7px] text-transparent font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "im-pair" ? elementKClassName : undefined
        }`}
      >
        <span className="text-[#144561]">+44k€ </span>
        <span className={`text-[#00a878] ${property1 === "im-pair" ? spanClassNameOverride : undefined}`}>{text2}</span>
      </p>
      <p
        className={`[font-family:'Lato',Helvetica] left-[682px] tracking-[0] text-[11px] top-[7px] text-transparent font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "im-pair" ? elementKClassNameOverride : undefined
        }`}
      >
        <span className="text-[#144561]">26k€ </span>
        <span className={`text-[#00a878] ${property1 === "im-pair" ? spanClassName1 : undefined}`}>{text2}</span>
      </p>
      <div
        className={`[font-family:'Lato',Helvetica] tracking-[0] text-[11px] top-[7px] font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "pair" ? "left-[777px]" : "left-[811px]"
        } ${property1 === "pair" ? "text-primary" : "text-transparent"}`}
      >
        {property1 === "im-pair" && (
          <>
            <p>
              <span className="text-[#144561]">+26k</span>
            </p>
            <p>
              <span className="text-[#00a878]">{text1}</span>
            </p>
          </>
        )}

        {property1 === "pair" && <>-2</>}
      </div>
      <div
        className={`[font-family:'Lato',Helvetica] tracking-[0] text-[11px] top-[7px] text-transparent font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "pair" ? "left-[811px]" : "left-[1033px]"
        }`}
      >
        <span className="text-[#144561]">
          {property1 === "im-pair" && <>57k€</>}

          {property1 === "pair" && <>+26k </>}
        </span>
        <span className="text-[#00a878]">
          {property1 === "im-pair" && <>{text1}</>}

          {property1 === "pair" && <>{text2}</>}
        </span>
      </div>
      <div
        className={`[font-family:'Lato',Helvetica] tracking-[0] text-[11px] top-[7px] text-transparent font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "pair" ? "left-[1033px]" : "left-[951px]"
        }`}
      >
        <span className="text-[#144561]">
          {property1 === "im-pair" && <>222k€ </>}

          {property1 === "pair" && <>57k€ </>}
        </span>
        <span className="text-[#00a878]">{text2}</span>
      </div>
      <div
        className={`[font-family:'Lato',Helvetica] tracking-[0] text-[11px] top-[7px] font-normal text-right whitespace-nowrap leading-[normal] absolute ${
          property1 === "pair" ? "left-[951px]" : "left-[777px]"
        } ${property1 === "pair" ? "text-transparent" : "text-primary"}`}
      >
        {property1 === "im-pair" && <>-2</>}

        {property1 === "pair" && (
          <>
            <p>
              <span className="text-[#144561]">222k€ </span>
            </p>
            <p>
              <span className="text-[#00a878]">{text2}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

DashmacroRow.propTypes = {
  property1: PropTypes.oneOf(["im-pair", "pair"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

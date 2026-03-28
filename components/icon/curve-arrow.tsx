import * as React from "react";
import { SVGProps } from "react";

export default function CurveArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      viewBox="0 0 30 24.545456"
    >
      <path
        d="M17.7273 17.7273C-0.0722656 17.7273 0 0 0 0C0 0 1.72772 8.18181 17.7273 8.18181L17.7273 1.36363L30 13.2164L17.7273 24.5455L17.7273 17.7273L17.7273 17.7273Z"
        id="Forme"
        stroke="none"
      />
    </svg>
  );
}

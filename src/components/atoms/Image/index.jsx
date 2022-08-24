import React from "react";
import "./styles.css";

export const TYPES = {
  TINY: 1,
  ALMOSTTINY: 2,
  EXTRAEXTRA_SMALL: 3,
  EXTRA_SMALL: 4,
  ALMOSTEXTRA_SMALL: 5,
  SMALLMINI: 6,
  SMALL: 7,
  ALMOSTSMALL: 8,
  MED: 9,
  MEDLARGE: 10,
  LARGE: 11,
  EXTRALARGE: 12,
  HUGE: 13  
};

const SCALE_TINY = "11px";
const SCALE_ALMOSTTINY = "15px";
const SCALE_EXTRAEXTRA_SMALL = "25px";
const SCALE_EXTRA_SMALL = "30px";
const SCALE_ALMOSTEXTRA_SMALL = "50px";
const SCALE_SMALLMINI = "60px";
const SCALE_SMALL = "70px";
const SCALE_ALMOSTSMALL = "120px";
const SCALE_MED = "150px";
const SCALE_LARGE = "250px";
const SCALE_MEDLARGE = "188px";
const SCALE_EXTRALARGE = "316px";
const SCALE_HUGE = "500px";

export default function Image({
  imageName = "default.jpg",
  isRounded = false,
  isBordered = false,
  type = TYPES.SMALL,
  style = {},
  className="",
  onClick = () => {},
}) {
  let SIZE = {};
  let scale = 0;
  let padding = 0;
  switch (type) {
    case TYPES.TINY:
      scale = SCALE_TINY;
      padding = 3;
      break;
    case TYPES.ALMOSTTINY:
      scale = SCALE_ALMOSTTINY;
      padding = 3;
      break;
    case TYPES.EXTRAEXTRA_SMALL:
      scale = SCALE_EXTRAEXTRA_SMALL;
      padding = 4;
      break;
    case TYPES.EXTRA_SMALL:
      scale = SCALE_EXTRA_SMALL;
      padding = 5;
      break;
    case TYPES.ALMOSTEXTRA_SMALL:
      scale = SCALE_ALMOSTEXTRA_SMALL;
      padding = 7;
      break;
    case TYPES.SMALLMINI:
      scale = SCALE_SMALLMINI;
      padding = 9;
      break;
    case TYPES.SMALL:
      scale = SCALE_SMALL;
      padding = 10;
      break;
    case TYPES.ALMOSTSMALL:
      scale = SCALE_ALMOSTSMALL;
      padding = 20;
      break;
    case TYPES.MED:
      scale = SCALE_MED;
      padding = 20;
      break;
    case TYPES.MEDLARGE:
      scale = SCALE_MEDLARGE;
      padding = 14;
      break;
    case TYPES.EXTRALARGE:
      scale = SCALE_EXTRALARGE;
      padding = 10;
      break;
    case TYPES.HUGE:
      scale = SCALE_HUGE;
      padding = 0;
      break;
    default:
      scale = SCALE_LARGE;
      padding = 30;
      break;
  }
  SIZE = { width: scale };
  padding = isRounded ? padding : 0;
  return (
    <img
      onClick={onClick}
      className={(isBordered ? "bordered" : "") + (isRounded ? "rounded " : "")+ ((className!=="" ? className : ""))}
      src={
        imageName.startsWith("http")
          ? imageName
          : require("../../../assets/images/" + imageName)
      }
      alt={imageName}
      style={{ ...style, ...SIZE, padding }}
    />
  );
}

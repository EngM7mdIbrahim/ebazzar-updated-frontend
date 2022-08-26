import React from "react";
import AppLabel from "../../components/atoms/AppLabel";
import Image, { TYPES } from "../../components/atoms/Image";
import { PRIMARY } from "../../styles/colors";
import "./styles.css";

export default function ProfileTemplate({
  name = "Mohamed Ibrahim",
  photoUrL = "user-avatar.jpg",
}) {
  return (
    <div
      style={{ flex: 1, backgroundColor: PRIMARY, padding: "20px" }}
      className="page"
    >
      <div

        id="profile-menu"
        className="profile-cont"
      >
        <div className="profile-header-temp">
          <Image imageName={photoUrL} type={TYPES.ALMOSTSMALL} isRounded />
          <AppLabel isBold>
            Hi {name}!<br /> Good to see you?
          </AppLabel>
        </div>
      </div>
      <div
      style={{flex: 1}}
        id="profile-submenu"
        className="profile-cont"
      ></div>
    </div>
  );
}

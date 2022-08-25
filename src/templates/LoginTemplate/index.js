import React from "react";
import "./styles.css";
import { PRIMARY, SECONDARY } from "../../styles/colors";
import Form from "../../components/molecules/Form";
import Image, { TYPES } from "../../components/atoms/Image";

export default function LoginTemplate() {
  return (
    <div style={{ backgroundColor: PRIMARY }} className="page">
      <div
        style={{ flex: 2, position: "relative" }}
        className="login-temp-sub-cont"
      >
        <Image
          style={{
            position: "absolute",
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            top: 50,
            left: 50,
          }}
          imageName="car.png"
        />
        <Image
          style={{
            position: "absolute",
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            top: 50,
            right: 50,
          }}
          imageName="smartphone.png"
        />
        <Image
          style={{
            position: "absolute",
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            bottom: 50,
            left: 50,
          }}
          imageName="flat.png"
        />
        <Image
          style={{
            position: "absolute",
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            bottom: 50,
            right: 50,
          }}
          imageName="music.png"
        />
        <div style={{ backgroundColor: SECONDARY }} className="center-image">
          <Image imageName="login-temp.png" type={TYPES.HUGE} />
        </div>
      </div>
      <div style={{ padding: "40px" }} className="login-temp-sub-cont">
        <Form
          titleStyle={{ width: "100%", textAlign: "left" }}
          title="What's up, Dealer!"
        />
      </div>
    </div>
  );
}

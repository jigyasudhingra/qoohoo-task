import React from "react";
import BLUE_TICK from "../assets/BlueTick.png";

const FilledCircle = (props) => {
  const { circleColor, width, height, tick } = props;
  return (
    <div
      style={{
        backgroundColor: circleColor,
        borderRadius: 50,
        width: width,
        height: height,
      }}
    >
      {tick && (
        <img
          style={{
            marginTop: "35%",
          }}
          src={BLUE_TICK}
          alt="blue-tick"
        />
      )}
    </div>
  );
};

export default FilledCircle;

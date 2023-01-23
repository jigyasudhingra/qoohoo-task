import React from "react";

const FilledCircle = (props) => {
  const { circleColor, width, height } = props;
  return (
    <div
      style={{
        backgroundColor: circleColor,
        borderRadius: 50,
        width: width,
        height: height,
      }}
    />
  );
};

export default FilledCircle;

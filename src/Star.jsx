import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

export default function Star(props) {
  const starIcon = props.isFilled ? (
    <AiTwotoneStar color="#e3be05fa" />
  ) : (
    <AiTwotoneStar color="#b1a3a3 " />
  );
  return (
    <>
      {/* <FaAdn /> */}
      <div className="card--favorite" onClick={props.handleClick}>
        {starIcon}
      </div>
    </>
  );
}

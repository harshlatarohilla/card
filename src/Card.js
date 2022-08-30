import React, { useState } from "react";

function Card({ userName, number, image, email }) {
  // const [class1, setClass1] = useState("");
  const [class1, setClass1] = useState("");
  // console.log(state);
  return (
    <div
      className={"card " + class1}
      id="card"
      onClick={() => setClass1(class1 ? "" : "big")}
    >
      <div className="image-wrapper">
        <p className="name">{userName}</p>
        <img className="image" src={image} alt="pic" />
      </div>
      <p className="number">{number}</p>
      <p className="email">{email}</p>
    </div>
  );
}

export default Card;

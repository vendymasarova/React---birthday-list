import React from "react";

function Birthdays({ img, name, age }) {
  //   console.log(name);
  return (
    <div className="list">
      <img src={img} alt="" />
      <div className="info">
        <h1 className="name">{name}</h1>
        <p className>{age}</p>
      </div>
    </div>
  );
}

export default Birthdays;

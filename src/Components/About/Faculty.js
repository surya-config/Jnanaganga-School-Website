import React from "react";

function Faculty({ image, name, designation }) {
  return (
    <div className="faculty__content">
      <img src={image} alt="" />
      <h4>{name}</h4>
      <h5>{designation}</h5>
    </div>
  );
}

export default Faculty;

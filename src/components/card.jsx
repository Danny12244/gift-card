import React from "react";
import "./card.css";
const card = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((el,ind) => (
        <div className={el.color} key={ind}>
          <div className="card-img">
            <p>{el.date}</p>
            <img src={el.img} />
          </div>
          <p>{el.study}</p>
          <h1>{el.gift}</h1>
          <h1>{el.pay}</h1>
          <h3>{el.des}</h3>
        </div>
      ))}
    </div>
  );
};

export default card;

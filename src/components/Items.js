import React from "react";

export const Items = (props) => {
  return (
    <div className="items-wrapper">
      {props.data.map((datas) => {
        return (
          <div className="container">
            <img src={datas.img} alt="random food" />
            <div className="contents">
              <div className="contents-header">
                <p className="title">
                  {datas.title.slice(0, 1).toUpperCase()}
                  {datas.title.slice(1)}
                </p>
                <p className="price">${datas.price}</p>
              </div>
                <hr />
              <p className="desc">
                {datas.desc.slice(0, 1).toUpperCase()}
                {datas.desc.slice(1)}.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

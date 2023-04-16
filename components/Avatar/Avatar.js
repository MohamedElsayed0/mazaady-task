import React from 'react'
import avatar from "@/public/images/avat.webp";
import Rating from '../Rating/Rating';
const Avatar = ({name, number,withFave }) => {
  return (
    <div className="d-flex align-items-center">
      <div
        className="position-relative"
        style={{ width: "50px", height: "50px" }}
      >
        <div
          style={{ width: "50px", height: "50px", overflow: "hidden" }}
          className="rounded-circle bg-dark position-relative"
        >
          <img src={avatar.src} alt="" className="img-fluid h-100" />
        </div>
        {withFave ? (
          <div
            className="position-absolute rounded-circle bg-white d-flex align-items-center shadow justify-content-center text-secondary"
            style={{
              width: "25px",
              height: "25px",
              overflow: "hidden",
              bottom: -5,
              left: -8,
              fontSize: "13px",
            }}
          >
            <span>
              <i className="fas fa-heart"></i>
            </span>
          </div>
        ) : null}
      </div>

      <div className="mx-3">
        <h6 className="h6" style={{fontSize:"14px"}}>
          {name}
          {withFave ? (
            <span className="mx-4">
              {" "}
              <Rating />
            </span>
          ) : (
            ""
          )}
        </h6>
        <h6 style={{ fontSize: "13px", fontWeight: "400" }}>{number}</h6>
      </div>
    </div>
  );
}

export default Avatar
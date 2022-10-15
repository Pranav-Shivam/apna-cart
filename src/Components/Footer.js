import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button className="btn btn-info col-2" onClick={()=>{
        props.resetQuantity()
      }} 
      >Reset</button>
      <div className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-success col-2">Buy Now</button>
    </div>
  );
}

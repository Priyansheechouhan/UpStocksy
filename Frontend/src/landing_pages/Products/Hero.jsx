import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="mx-5">
        <div className="m-5 text-center border-bottom" style={{paddingTop: "3rem", paddingBottom: "6rem"}}>
          <h3>
            Zerodha Products
          </h3>
          <p className="fs-5 mt-3 text-muted fw-semibold">Sleek, modern, and intuitive trading platforms</p>
          <p className=" text-muted">Check out our <span className="text-primary">investment offerings →</span></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
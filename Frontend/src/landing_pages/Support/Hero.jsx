import React from "react";
function Hero() {
  return (
    <div className="" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container px-5">
        <div className="mx-5 px-3 py-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="d-inline">Support Portal</h1>
            <button className="btn btn-primary fw-semibold ">My tickets</button>
          </div>
          <input
            className="form-control form-control-lg fs-6 p-3 mb-2"
            type="text"
            placeholder="Eg: how do i open my account, how do i activate F&O..."
            aria-label=".form-control-lg example"
          />
        </div>
      </div>
    </div>

    //<i class="fa-solid fa-magnifying-glass"></i>Eg: how do i open my account, how do i activate F&O...
  );
}

export default Hero;

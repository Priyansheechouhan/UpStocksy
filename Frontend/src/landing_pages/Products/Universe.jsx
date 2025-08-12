import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="text-center">
        <p className="fs-5 mt-5 text-muted fw-semibold">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h4 className="mt-5 pt-5 mb-4">The Zerodha Universe</h4>
        <p className="fs-6 text-muted fw-semibold mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row py-3" style={{ fontSize: "0.8rem" }}>
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <a href="#" className="text-decoration-none">
              <img
                src="images/zerodhaFundhouse.png"
                alt=""
                className="mb-3"
                style={{ width: "12rem" }}
              />
              <p className="text-muted fw-semibold">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <a href="#" className="text-decoration-none">
              <img
                src="images/sensibullLogo.svg"
                alt=""
                className="mb-4"
                style={{ width: "13rem" }}
              />
              <p className="text-muted fw-semibold">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <a href="#" className="text-decoration-none">
              <img
                src="images/tijori.svg"
                alt=""
                className="mb-3"
                style={{ width: "8rem" }}
              />
              <p className="text-muted fw-semibold">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </a>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row pt-3 pb-5" style={{ fontSize: "0.8rem" }}>
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <a href="#" className="text-decoration-none">
              <img
                src="images/streakLogo.png"
                alt=""
                className="mb-3"
                style={{ width: "12rem" }}
              />
              <p className="text-muted fw-semibold">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <a href="#" className="text-decoration-none">
              <img
                src="images/smallcaseLogo.png"
                alt=""
                className="mb-4"
                style={{ width: "13rem" }}
              />
              <p className="text-muted fw-semibold">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <a href="#" className="text-decoration-none">
              <img
                src="images/dittoLogo.png"
                alt=""
                className="mb-4"
                style={{ width: "8rem" }}
              />
              <p className="text-muted fw-semibold">
                Personalized advice on life and health insurance. No spam and no
                mis-selling. Sign up for free
              </p>
            </a>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="mb-5 pb-5">
          <button
            className="btn btn-primary btn-lg m-auto"
            style={{ width: "20%" }}>
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;

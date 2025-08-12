function Hero() {
  return (
    <div className="container mb-5">
      <div className="text-center my-5 py-5">
        <h3>Charges</h3>
        <h4 className="text-muted fw-normal mt-3">
          List of all charges and taxes
        </h4>
      </div>
      <div className="row mx-5 text-center pt-5">
        <div className="col-lg-4 px-4">
          <img src="images/pricing-eq1.svg" alt="" style={{ width: "16rem" }} />
          <h3 className="mt-4 mb-4">Free equity delivery</h3>
          <p className="text-muted"> 
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 px-4">
          <img
            src="images/other-trades3.svg"
            alt=""
            style={{ width: "16rem" }}
          />
          <h3 className="mt-4 mb-4">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 px-5">
          <img src="images/pricing-eq2.svg" alt="" style={{ width: "16rem" }} />
          <h3 className="mt-4 mb-4">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import "./createTicket.css";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mx-5 px-5 my-5">
        <div className="col-lg-8">
          <div className="mb-4">
            <div
              className="border d-flex dropdown-div"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              aria-expanded="false"
              aria-controls="multiCollapseExample1">
              <div className="bg-light d-flex align-items-center">
                <i class="fa-solid fa-circle-plus mx-3 my-3"></i>
              </div>
              <div className="fw-semibold my-3 ms-3">Account Opening</div>
              <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <i class="fa-solid fa-angle-down mx-3 my-3"></i>
              </div>
            </div>
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                <ul>
                  <a href="#" className="text-decoration-none">
                    <li>Resident individual</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Minor</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Non Resident Indian (NRI)</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Company, Partnership, HUF and LLP</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Glossary</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div
              className="border d-flex dropdown-div"
              data-bs-toggle="collapse"
              href="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2">
              <div className="bg-light d-flex align-items-center">
                <i class="fa-solid fa-circle-user mx-3 my-3"></i>
              </div>
              <div className="fw-semibold my-3 ms-3">Your Zerodha Account</div>
              <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <i class="fa-solid fa-angle-down mx-3 my-3"></i>
              </div>
            </div>
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                <ul>
                  <a href="#" className="text-decoration-none">
                    <li>Your Profile</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Account modification</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>
                      Client Master Report (CMR) and Depository Participant (DP)
                    </li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Nomination</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Transfer and conversion of securities</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div
              className="border d-flex dropdown-div"
              data-bs-toggle="collapse"
              href="#multiCollapseExample3"
              aria-expanded="false"
              aria-controls="multiCollapseExample3">
              <div className="bg-light d-flex align-items-center">
                <i class="fa-brands fa-flutter mx-3 my-3"></i>
              </div>
              <div className="fw-semibold my-3 ms-3">Kite</div>
              <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <i class="fa-solid fa-angle-down mx-3 my-3"></i>
              </div>
            </div>
            <div class="collapse multi-collapse" id="multiCollapseExample3">
              <div class="card card-body">
                <ul>
                  <a href="#" className="text-decoration-none">
                    <li>IPO</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Trading FAQs</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Margin Trading Facility (MTF) and Margins</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Charts and orders</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Alerts and Nudges</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>General</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div
              className="border d-flex dropdown-div"
              data-bs-toggle="collapse"
              href="#multiCollapseExample4"
              aria-expanded="false"
              aria-controls="multiCollapseExample4">
              <div className="bg-light d-flex align-items-center">
                <i class="fa-solid fa-hand-holding-dollar mx-3 my-3"></i>
              </div>
              <div className="fw-semibold my-3 ms-3">Funds</div>
              <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <i class="fa-solid fa-angle-down mx-3 my-3"></i>
              </div>
            </div>
            <div class="collapse multi-collapse" id="multiCollapseExample4">
              <div class="card card-body">
                <ul>
                  <a href="#" className="text-decoration-none">
                    <li>Add money</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Withdraw money</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Add bank accounts</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>eMandates</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div
              className="border d-flex dropdown-div"
              data-bs-toggle="collapse"
              href="#multiCollapseExample5"
              aria-expanded="false"
              aria-controls="multiCollapseExample5">
              <div className="bg-light d-flex align-items-center">
                <i class="fa-solid fa-circle-notch mx-3 my-3"></i>
              </div>
              <div className="fw-semibold my-3 ms-3">Console</div>
              <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <i class="fa-solid fa-angle-down mx-3 my-3"></i>
              </div>
            </div>
            <div class="collapse multi-collapse" id="multiCollapseExample5">
              <div class="card card-body">
                <ul>
                  <a href="#" className="text-decoration-none">
                    <li>Portfolio</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Corporate actions</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Funds statement</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Reports</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Profile</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Segments</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-md-5 mb-sm-5 mb-lg-0">
            <div
              className="border d-flex dropdown-div"
              data-bs-toggle="collapse"
              href="#multiCollapseExample6"
              aria-expanded="false"
              aria-controls="multiCollapseExample6">
              <div className="bg-light d-flex align-items-center">
                <i class="fa-regular fa-circle mx-3 my-3"></i>
              </div>
              <div className="fw-semibold my-3 ms-3">Coin</div>
              <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                <i class="fa-solid fa-angle-down mx-3 my-3"></i>
              </div>
            </div>
            <div class="collapse multi-collapse" id="multiCollapseExample6">
              <div class="card card-body">
                <ul>
                  <a href="#" className="text-decoration-none">
                    <li>Mutual funds</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>National Pension Scheme (NPS)</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Fixed Deposit (FD)</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Features on Coin</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>Payments and Orders</li>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <li>General</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-md-0 mt-sm-0 mt-lg-0">
          <div className="ms-lg-3">
            <div className="side-dive-1 p-0 d-flex justify-content-center align-items-center">
              <div className="side-dive-left"></div>
              <div className="me-2 mt-2">
                <ul>
                  <a href="#">
                    <li className="mb-3">
                      Exclusion of F&O contracts on 8 securities from August 29,
                      2025
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      Revision in expiry day of Index and Stock derivatives
                      contracts
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="ms-lg-3 mt-4">
            <div className="side-dive-2 broder">
              <p className="bg-light px-3 py-2 mb-0 fw-semibold">Quick links</p>
              <p className="px-3 py-2 mb-0 border-top-none border ">
                <a href="#" className="text-decoration-none">
                  1. Track account opening
                </a>
              </p>
              <p className="px-3 py-2 mb-0 border-top-none border ">
                <a href="#" className="text-decoration-none">
                  2. Track segment activation
                </a>
              </p>
              <p className="px-3 py-2 mb-0 border-top-none border ">
                <a href="#" className="text-decoration-none">
                  3. Intraday margins
                </a>
              </p>
              <p className="px-3 py-2 mb-0 border-top-none border ">
                <a href="#" className="text-decoration-none">
                  4. Kite user manual
                </a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

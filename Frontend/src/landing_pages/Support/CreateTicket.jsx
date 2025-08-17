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
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default CreateTicket;

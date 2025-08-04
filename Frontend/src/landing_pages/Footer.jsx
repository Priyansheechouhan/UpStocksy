import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="bg-light border-top">
      <div className="container px-5 py-5">
        <div className="row ps-5 ms-2">
          <div className="col-md-3">
            <div className="me-5">
              <a class="navbar-brand" href="#">
                <img src="images/logo.svg" alt="" style={{ width: "55%" }} />
              </a>
              <div className="fw-semibold">
                <p className="mb-0 mt-3 text-muted small">
                © 2010 - 2025, Zerodha Broking Ltd.
                </p>
                <p className="text-muted small">All rights reserved.</p>
              </div>
              <div className="fs-5 pb-3 border-bottom text-muted">
                <i class="fa-brands fa-x-twitter me-3"></i>
                <i class="fa-brands fa-square-facebook me-3"></i>
                <i class="fa-brands fa-instagram me-3"></i>
                <i class="fa-brands fa-linkedin-in me-3"></i>
              </div>
              <div className="fs-5 pb-3 mt-3 text-muted">
                <i class="fa-brands fa-youtube me-3"></i>
                <i class="fa-brands fa-whatsapp me-3"></i>
                <i class="fa-brands fa-telegram me-3"></i>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <h4 className="fs-5 mb-4">Account</h4>
            <ul className="list-unstyled small fw-semibold">
                <a href="#"  className="text-decoration-none text-muted"><li className="mb-3">Open demat account</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Minor demat account</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">NRI demat account</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Commodity</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Dematerialisation</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Fund transfer</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">MTF</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Referral program</li></a>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="fs-5 mb-4">Support</h4>
            <ul className="list-unstyled small fw-semibold">
                <a href="#"  className="text-decoration-none text-muted"><li className="mb-3">Contact us</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Support portal</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">How to file a complaint?</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Status of your complaints</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Bulletin</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Circular</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Z-Connect blog</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Downloads</li></a>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="fs-5 mb-4">Company</h4>
            <ul className="list-unstyled small fw-semibold">
                <a href="#"  className="text-decoration-none text-muted"><li className="mb-3">About</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Philosophy</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Press & media</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Careers</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Zerodha Cares (CSR)</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Zerodha.tech</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Open source</li></a>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="fs-5 mb-4">Quick links</h4>
            <ul className="list-unstyled small fw-semibold">
                <a href="#"  className="text-decoration-none text-muted"><li className="mb-3">Upcoming IPOs</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Brokerage charges</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Market holidays</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Economic calendar</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Calculators</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Markets</li></a>
                <a href="#" className="text-decoration-none text-muted"><li className="mb-3">Sectors</li></a>
            </ul>
          </div>
        </div>
        <div className="px-5 mx-2 footer-para text-muted mt-5">
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <p><a href="#" className="text-decoration-none">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
            <p>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p>
                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
                India's largest broker based on networth as per NSE. NSE broker factsheet
            </p>
            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
            
        </div>
            <div className="px-5 ms-2 text-center">          
                <a href="#" className="text-decoration-none text-muted small m-2">NSE</a>
                <a href="#" className="text-decoration-none text-muted small m-2">BSE</a>
                <a href="#" className="text-decoration-none text-muted small m-2">MCX</a>
                <a href="#" className="text-decoration-none text-muted small m-2">Terms & conditions</a>
                <a href="#" className="text-decoration-none text-muted small m-2">Policies & procedures</a>
                <a href="#" className="text-decoration-none text-muted small m-2">Privacy policy</a>
                <a href="#" className="text-decoration-none text-muted small m-2">Disclosure</a>
                <a href="#" className="text-decoration-none text-muted small m-2">For investor's attention</a>
                <a href="#" className="text-decoration-none text-muted small m-2">Investor</a>
                <a href="#" className="text-decoration-none text-muted small m-2">charter</a>
            </div>
      </div>
    </div>
  );
}

export default Footer;

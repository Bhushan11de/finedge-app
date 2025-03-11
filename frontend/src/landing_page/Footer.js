import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.jpg" alt="Finedge Logo" style={{ width: "50%" }} className="mb-3" />
            <p className="mb-4">&copy; 2010 - 2024, Finedge Broking Ltd. All rights reserved.</p>
            <div className="fs-4 d-flex gap-3 text-muted">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <hr />
            <div className="fs-4 d-flex gap-3 text-muted">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col footer-nav">
            <p>Company</p>
            <a href="/">About</a>
            <br />
            <a href="/">Products</a>
            <br />
            <a href="/">Pricing</a>
            <br />
            <a href="/">Referral programme</a>
            <br />
            <a href="/">Careers</a>
            <br />
            <a href="/">Finedge.tech</a>
            <br />
            <a href="/">Press & media</a>
            <br />
            <a href="/">Finedge Cares (CSR)</a>
            <br />
          </div>
          <div className="col footer-nav">
            <p>Support</p>
            <a href="/">Contact us</a>
            <br />
            <a href="/">Support portal</a>
            <br />
            <a href="/">Z-Connect blog</a>
            <br />
            <a href="/">List of charges</a>
            <br />
            <a href="/">Downloads & resources</a>
            <br />
          </div>
          <div className="col footer-nav">
            <p>Account</p>
            <a href="/">Open an account</a>
            <br />
            <a href="/">Fund transfer</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Finedge Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Finedge Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Finedge Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 
          </p>
          <br />
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.
          </p>
          <br />
          <p>
            As a business, we don't give stock tips and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Finedge and offering such services, please create a ticket here.
          </p>
          <br />
        </div>
        <div className="mt-2 text-muted d-flex gap-3 justify-content-center footer-links" style={{ fontSize: "15px" }}>
          <p>NSE</p>
          <p>BSE</p>
          <p>MCX</p>
          <p>Terms & Conditions</p>
          <p>Policies and procedures</p>
          <p>Privacy Policy </p>
          <p>Disclosure</p>
          <p>For investors Attention</p>
          <p>Investors charter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

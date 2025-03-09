import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} className="mb-3" />
            <p className="mb-4">&copy; 2023 - 2024, Finedge. All rights reserved.</p>
            <div className="fs-4 d-flex gap-3 text-muted">
              <a href="https://x.com/sgbaustudents?lang=en" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/santgadgebabaamravatiuniversity/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.instagram.com/sgbau_official/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/school/sant-gadge-baba-amravati-university-amravati/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <hr />
            <div className="fs-4 d-flex gap-3 text-muted">
              <a href="https://www.youtube.com/@santgadgebabaamravatiunive9624" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://x.com/sgbaustudents?lang=en" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="col footer-nav">
            <p>Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/products">Products</a>
            <br />
            <a href="/pricing">Pricing</a>
            <br />
            <a href="/referral">Referral programme</a>
            <br />
            <a href="/careers">Careers</a>
            <br />
            <a href="/tech">Finedge.tech</a>
            <br />
            <a href="/press-media">Press & media</a>
            <br />
            <a href="/csr">CSR</a>
            <br />
          </div>
          <div className="col footer-nav">
            <p>Support</p>
            <a href="/contact">Contact us</a>
            <br />
            <a href="/support-portal">Support portal</a>
            <br />
            <a href="/blog">Blog</a>
            <br />
            <a href="/charges">List of charges</a>
            <br />
            <a href="/resources">Downloads & resources</a>
            <br />
          </div>
          <div className="col footer-nav">
            <p>Account</p>
            <a href="/open-account">Open an account</a>
            <br />
            <a href="/fund-transfer">Fund transfer</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            [Your App Name]: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through [Your App Name] – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through [Your App Name] – MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: [Your Address Here], Bengaluru - 560078, Karnataka, India. For any complaints, please write to complaints@yourapp.com.
          </p>
          <br />
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <br />
          <p>
            As a business, we don't give stock tips and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of [Your App Name] and offering such services, please create a ticket here.
          </p>
          <br />
        </div>
        <div className="mt-2 text-muted d-flex gap-3 justify-content-center footer-links" style={{ fontSize: "15px" }}>
          <a href="/terms">Terms & Conditions</a>
          <p>Policies and procedures</p>
          <p><a href="/privacy">Privacy Policy</a></p>
          <p><a href="/disclosure">Disclosure</a></p>
          <p><a href="/investors-charter">Investors Charter</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

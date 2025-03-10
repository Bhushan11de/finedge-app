import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              className="mb-3"
              alt="Finedge Logo"  // Added alt attribute
            />
            <p className="mb-4">&copy; 2023 - 2024, Finedge. All rights reserved.</p>
            <div className="fs-4 d-flex gap-3 text-muted">
              <a
                href="https://x.com/sgbaustudents?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/santgadgebabaamravatiuniversity/"
                target="_blank"
                rel="noopener noreferrer"  {/* Fixed rel attribute */}
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/santgadgebabaamravatiuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

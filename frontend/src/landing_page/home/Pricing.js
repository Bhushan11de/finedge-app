import React from "react";

function Pricing() {
  const handlePricingClick = () => {
    // Replace this with the desired action or functionality
    alert("Redirecting to Pricing details");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              color: "#387ed1",
              cursor: "pointer",
            }}
            onClick={handlePricingClick}
          >
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br /> direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

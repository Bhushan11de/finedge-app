import React from "react";

function Brokerage() {
  // You can define any onClick handlers if needed
  const handleClick = () => {
    // Add your logic for button clicks here
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <h3 className="fs-5 mb-4">
            {/* Changed <a> to <button> for accessibility */}
            <button
              onClick={handleClick}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Brokerage Calculator
            </button>
          </h3>
          <ul
            className="text-muted"
            style={{ textAlign: "left", lineHeight: "2.5" }}
          >
            <li style={{ fontSize: "0.7em" }}>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li style={{ fontSize: "0.7em" }}>
              Digital contract notes will be sent via e-mail.
            </li>
            <li style={{ fontSize: "0.7em" }}>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li style={{ fontSize: "0.7em" }}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li style={{ fontSize: "0.7em" }}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li style={{ fontSize: "0.7em" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <h3 className="fs-5">
            {/* Changed <a> to <button> for accessibility */}
            <button
              onClick={handleClick}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              List Of charges
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

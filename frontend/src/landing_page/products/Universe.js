import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* Thematic investment platform */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaselogo.png"
            alt="Smallcase thematic investment platform logo"
          />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Thematic investment platform
          </p>
        </div>

        {/* Algo & strategy platform */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak logo - Algo & strategy platform"
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Algo & strategy platform
          </p>
        </div>

        {/* Options trading platform */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull logo - Options trading platform"
            style={{ width: "60%" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Options trading platform
          </p>
        </div>

        {/* Asset management */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse logo - Asset management"
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Asset management
          </p>
        </div>

        {/* Fundamental research platform */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            alt="Tijori logo - Fundamental research platform"
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Fundamental research platform
          </p>
        </div>

        {/* Insurance */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto logo - Insurance"
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Insurance
          </p>
        </div>

        {/* Sign-up button */}
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: "15%", margin: "0 auto" }}>
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;

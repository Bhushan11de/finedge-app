import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Finedge Universe</h1>
        <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaselogo.png" alt="Thematic investment platform" />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "40%" }} alt="Algo & strategy platform" />
          <p className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} alt="Options trading platform" />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Options trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/finedgeFundhouse.png" style={{ width: "40%" }} alt="Asset management" />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Asset management
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" style={{ width: "40%" }} alt="Fundamental research platform" />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Fundamental research platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} alt="Insurance" />
          <p className="text-muted mt-3" style={{ fontSize: "0.7em" }}>
            Insurance
          </p>
        </div>

        <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: "15%", margin: "0 auto" }}>
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;

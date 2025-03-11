import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <Link to="/track-tickets" aria-label="Track Tickets">
          Track Tickets
        </Link>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do I activate F&O" className="form-control mb-3" />
          <Link to="/track-account-opening" className="d-block" aria-label="Track account opening">
            Track account opening
          </Link>
          <Link to="/track-segment-activation" className="d-block" aria-label="Track segment activation">
            Track segment activation
          </Link>
          <Link to="/intraday-margins" className="d-block" aria-label="Intraday margins">
            Intraday margins
          </Link>
          <Link to="/kite-user-manual" className="d-block" aria-label="Kite user manual">
            Kite user manual
          </Link>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <Link to="/takeovers-delisting" aria-label="Current Takeovers and Delisting - January 2024">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <li>
              <Link to="/intraday-leverages" aria-label="Latest Intraday leverages - MIS & CO">
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

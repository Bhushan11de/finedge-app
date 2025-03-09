import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Invest in everything with FINEDGE</h1>
        <p>
          A revolutionary online platform to invest in stocks, derivatives, mutual funds, and much more.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5"
          onClick={() => window.location.href = "/signup"} // Update the button to direct users to the sign-up page
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}

export default Hero;

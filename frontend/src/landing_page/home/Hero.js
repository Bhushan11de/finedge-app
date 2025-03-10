import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        {/* Updated alt text to make it more meaningful */}
        <img
          src="media/images/homeHero.png"
          alt="A person using the Finedge platform to invest in various financial assets"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything with FINEDGE</h1>
        <p>
          A revolutionary online platform to invest in stocks, derivatives, mutual funds, and much more.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5"
        >
          Start Investing
        </button>
      </div>
    </div>
  );
}

export default Hero;

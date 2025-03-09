import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      {/* Header with the new app name */}
      <header style={{ textAlign: 'center', margin: '50px 0' }}>
        <h1>FINEDGE</h1> {/* Update with the new app name */}
        <p>
          Welcome to the best platform for growing your financial future. {/* Update this with relevant info */}
        </p>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Other sections */}
      <Awards />
      <Stats />
      <Pricing />
      <Education />

      {/* Call to Action Section */}
      <OpenAccount />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;

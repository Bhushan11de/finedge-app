import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

      {/* 🚀 Sign-Up Section */}
      <section className="signup-section text-center p-5" style={{ backgroundColor: "#f8f9fa" }}>
        <h2 className="text-dark">Join Finedge Today!</h2>
        <p className="text-muted">Start managing your investments and track your portfolio with ease.</p>
        <Link to="/register" className="btn btn-primary btn-lg">
          Sign Up Now
        </Link>
      </section>
    </>
  );
}

export default HomePage;

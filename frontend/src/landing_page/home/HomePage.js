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

      {/* ✅ Priti Jadhav's Info Section (Footer ke upar) */}
      <section className="p-5 mt-5 text-center" style={{ backgroundColor: "#f4f6f9" }}>
        <h2 className="text-muted">Meet Our Guide</h2>
        <div className="container">
          <h3>Priti Jadhav</h3>
          <h5>Project Teacher</h5>
          <p>Priti Jadhav has been instrumental in guiding and mentoring students in their project development.</p>
          <p>With experience in teaching and project management, she prepares students for industry standards.</p>
          <p>In her free time, Priti enjoys reading books and exploring new technologies.</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;

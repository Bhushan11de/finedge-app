import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <>
      <Hero />
      <div className="container p-5">
        <h2 className="text-center text-muted">This is the share market application and the name of the application is FINEDGE</h2>
        <p className="fs-4">
          This project is part of my MCA course at Sant Gadge Baba Amravati University. It aims to create a platform that helps businesses grow by integrating various modern technologies such as Node.js, React.js, and MongoDB. The goal is to provide a scalable and efficient platform for users to manage their investments and track their financial growth.
        </p>
        <p className="fs-4">
          The project focuses on developing a user-friendly interface and providing advanced backend features that allow seamless integration with financial platforms.
        </p>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="text-center text-muted mt-5">Our Team</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1. Bhushan Deshmukh - Devops Containerization</li>
            <li className="list-group-item">2. Chaitali Khandare - Frontend Developer</li>
            <li className="list-group-item">3. Darshana Lakshane - Backend Developer</li>
            <li className="list-group-item">4. Faraz Haque - Database</li>
            {/* Add more team members as necessary */}
          </ul>
        </div>
      </div>
      <Team />
    </>
  );
}

export default AboutPage;

import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center text-muted">People</h1>
      </div>
      <div className="row p-5 text-muted" style={{ fontSize: "1.2em" }}>
        <div className="col-6 p-5 text-center">
          {/* Image removed */}
          <h4 className="mt-5">Priti Jadhav</h4>
          <h6>Project Teacher</h6>
        </div>
        <div className="col-6 p-5" style={{ fontSize: "1em" }}>
          <p>
            Priti Jadhav has been instrumental in guiding and mentoring students in their project development. With a deep understanding of software engineering, Priti ensures that students are well-equipped to tackle real-world challenges and innovate.
          </p>
          <p>
            She has vast experience in teaching and project management, helping students achieve academic success while preparing them for industry standards.
          </p>
          <p>In her free time, Priti enjoys reading books and exploring new technologies.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#387ed1" }}>
              Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

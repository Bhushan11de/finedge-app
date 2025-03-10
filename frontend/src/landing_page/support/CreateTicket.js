import React from "react";

function CreateTicket() {
  // Define the list of ticket topics
  const ticketTopics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  // Render a list of topics
  const renderTopicList = (title) => (
    <div className="col-4 p-5 mt-2 mb-2">
      <h4 className="">
        <i className="fa fa-plus-circle" aria-hidden="true"></i> {title}
      </h4>
      {ticketTopics.map((topic, index) => (
        <a
          href="#"
          key={index}
          style={{ textDecoration: "none", lineHeight: "2.5" }}
        >
          {topic}
        </a>
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        
        {/* Render multiple topic sections */}
        {["Account Opening", "Account Opening", "Account Opening", "Account Opening", "Account Opening"].map((title, index) => renderTopicList(title))}
        
      </div>
    </div>
  );
}

export default CreateTicket;

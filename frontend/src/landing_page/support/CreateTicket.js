import React from "react";

const topics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Finedge",
      "Finedge IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Trading & Investing",
    links: [
      "Equity Trading",
      "Mutual Funds Investment",
      "Derivatives Trading",
      "Margin Trading Facility",
      "IPO Investment",
      "Taxation on Stocks",
      "Corporate Actions",
    ],
  },
  {
    title: "Funds & Payments",
    links: [
      "Adding Funds",
      "Withdrawal Process",
      "UPI Transactions",
      "Bank Account Linking",
      "Payment Issues",
      "Charges & Fees",
      "Refund Process",
    ],
  },
];

function TopicSection({ title, links }) {
  return (
    <div className="col-4 p-4">
      <h4>
        <i className="fa fa-plus-circle" aria-hidden="true"></i> {title}
      </h4>
      {links.map((link, index) => (
        <a key={index} href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          {link}
        </a>
      ))}
    </div>
  );
}

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {topics.map((topic, index) => (
          <TopicSection key={index} title={topic.title} links={topic.links} />
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;

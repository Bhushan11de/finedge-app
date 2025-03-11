import React from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "Account Opening",
    links: [
      { text: "Online Account Opening", url: "/account-opening/online" },
      { text: "Offline Account Opening", url: "/account-opening/offline" },
      { text: "Company, Partnership and HUF Account Opening", url: "/account-opening/company" },
      { text: "NRI Account Opening", url: "/account-opening/nri" },
      { text: "Charges at Finedge", url: "/account-opening/charges" },
      { text: "Finedge IDFC FIRST Bank 3-in-1 Account", url: "/account-opening/idfc" },
      { text: "Getting Started", url: "/account-opening/getting-started" },
    ],
  },
  {
    title: "Trading & Investing",
    links: [
      { text: "Equity Trading", url: "/trading-investing/equity" },
      { text: "Mutual Funds Investment", url: "/trading-investing/mutual-funds" },
      { text: "Derivatives Trading", url: "/trading-investing/derivatives" },
      { text: "Margin Trading Facility", url: "/trading-investing/margin" },
      { text: "IPO Investment", url: "/trading-investing/ipo" },
      { text: "Taxation on Stocks", url: "/trading-investing/taxation" },
      { text: "Corporate Actions", url: "/trading-investing/corporate-actions" },
    ],
  },
  {
    title: "Funds & Payments",
    links: [
      { text: "Adding Funds", url: "/funds-payments/add-funds" },
      { text: "Withdrawal Process", url: "/funds-payments/withdrawal" },
      { text: "UPI Transactions", url: "/funds-payments/upi" },
      { text: "Bank Account Linking", url: "/funds-payments/bank-linking" },
      { text: "Payment Issues", url: "/funds-payments/issues" },
      { text: "Charges & Fees", url: "/funds-payments/charges" },
      { text: "Refund Process", url: "/funds-payments/refunds" },
    ],
  },
];

const TopicSection = ({ title, links }) => (
  <div className="col-4 p-4">
    <h4>
      <i className="fa fa-plus-circle" aria-hidden="true"></i> {title}
    </h4>
    {links.map((link, index) => (
      <Link key={index} to={link.url} className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>
        {link.text}
      </Link>
    ))}
  </div>
);

const CreateTicket = () => (
  <div className="container">
    <div className="row p-5 mt-5 mb-5">
      <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
      {topics.map((topic, index) => (
        <TopicSection key={index} {...topic} />
      ))}
    </div>
  </div>
);

export default CreateTicket;

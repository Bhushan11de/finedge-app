import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      <section className="pricing-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Pricing Plans</h2>
          <div className="row">
            {/* Plan 1 */}
            <div className="col-md-4">
              <div className="pricing-card text-center p-4 shadow-sm">
                <h3>Basic Plan</h3>
                <p className="price">$10/month</p>
                <ul className="list-unstyled">
                  <li>1 Portfolio</li>
                  <li>Basic Features</li>
                  <li>Email Support</li>
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="col-md-4">
              <div className="pricing-card text-center p-4 shadow-sm">
                <h3>Premium Plan</h3>
                <p className="price">$25/month</p>
                <ul className="list-unstyled">
                  <li>5 Portfolios</li>
                  <li>Advanced Features</li>
                  <li>Priority Support</li>
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="col-md-4">
              <div className="pricing-card text-center p-4 shadow-sm">
                <h3>Pro Plan</h3>
                <p className="price">$50/month</p>
                <ul className="list-unstyled">
                  <li>Unlimited Portfolios</li>
                  <li>All Features</li>
                  <li>24/7 Premium Support</li>
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;

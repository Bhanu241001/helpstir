  import React from "react";

const helpstirForEveryone = () => {
  return (
    <section className="Helpstir-for-Everyone">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header">
              <h2>How is HELPSTiR for everyone</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="card-list">
            <li>
              <h3>You</h3>
              <div className="text">
                <p>
                  You care beyond money and don’t know a way to do so? You see
                  real people around you who could use help but don’t know what
                  to do? Then we’re here for you. Sign up now and be a HelpStir.
                </p>
                <a href="#">Be Our Volunteer</a>
              </div>
            </li>
            <li>
              <h3>NGOs</h3>
              <div className="text">
                <p>
                  Don't know how to get reliable volunteers? Local donors are
                  not reachable? Tedious CSR application process? We help you
                  find beneficiaries, volunteers, and donors in your location.
                  Connect with CSR partners that align with your vision. No fees
                  involved!
                </p>
                <a href="#">Be Our Partner</a>
              </div>
            </li>
            <li>
              <h3>Corporates</h3>
              <div className="text">
                <p>
                  Brands impact matters but can't find trusted NGOs? Tedious
                  process to align brand values and NGO programs? Want more
                  transparency and better reporting?
                </p>
                <a href="#">Know more</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default helpstirForEveryone;

import React from "react";

const OurSocial = () => {
  return (
    <section className="our-social">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header">
              <h2>OUR SOCIAL</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="insta-content">
              <div className="insta-profile">
                <img src="/instaprofile-logo.png" alt="" />
                <div className="Helpstir">
                  <div className="text">
                    <h4>Helpstir</h4>
                    <span>(be part of our community)</span>
                  </div>
                  <ul>
                    <li>
                      <span>128</span> posts
                    </li>
                    <li>
                      <span>4k</span> follower
                    </li>
                    <li>
                      <span>25M</span> views
                    </li>
                  </ul>
                </div>
              </div>
              <img src="/insta-screeshort.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSocial;

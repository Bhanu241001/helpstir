import React from 'react'

const footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logo">
              <img src="/footer-logo.png" alt="" />
            </div>
            <ul className="social-links">
              <li>
                <a href="#">
                  <img src="/social-logo/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/social-logo/x.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/social-logo/yotube.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/social-logo/instagram.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/social-logo/linkedin.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="footer-nav">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <p>© 2026 All rights reserved. HELPSTiR</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default footer
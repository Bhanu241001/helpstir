import React from "react";
// import helpstirWorkLogic from "./script.js";
const helpstirwork = () => {
  return (
    <section className="helpstirwork_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header">
              <h2>HOW HELPSTiR WORKS ⍰</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-container">
              <ul className="card-container">
                <li className="step-1 active">
                  <div className="content">
                    <h4>
                      Sign Up <br />
                      Create a profile
                    </h4>
                    <p>
                      Set up a username, OTP verification and thats it! In 2
                      steps you’re ready to help a child get access to education
                      on HELPSTiR
                    </p>
                    <a href="#">Sign-up</a>
                  </div>
                  <div className="step">
                    <img src="/arrow.png" alt="" />
                    <p>
                      Step <span>1</span>
                    </p>
                  </div>
                </li>
                <li className="step-2">
                  <div className="content">
                    <h4>
                      Know Someone <br /> Who Needs Help?
                    </h4>
                    <p>
                      Helping is even easier. You find a child who needs help
                      with education. You take a picture, tag the location, and
                      add details. Raise a HELP request. 
                    </p>
                    <a href="#">Raise help</a>
                  </div>
                  <div className="step">
                    <img src="/arrow.png" alt="" />
                    <p>
                      Step <span>2</span>
                    </p>
                  </div>
                </li>
                <li className="step-3">
                  <div className="content">
                    <h4>
                      Connect to nearby <br /> NGO verified
                    </h4>
                    <p>
                      HELP requests are sent to the NGOs' partners nearby,  who
                      will verify your request, get in touch with you, and
                      provide real-time help to real people around you!
                    </p>
                    <a href="#">Reach out</a>
                  </div>
                  <div className="step">
                    <img src="/arrow.png" alt="" />
                    <p>
                      Step <span>3</span>
                    </p>
                  </div>
                </li>
                <li className="step-4">
                  <div className="content">
                    <h4>Track the Impact</h4>
                    <p>
                      It doesn't end at connect for us, you can know and connect
                      to find what really happened to the person you helped with
                      ease.
                    </p>
                    <a href="#">Be a Volunteer</a>
                  </div>
                  <div className="step">
                    <img src="/arrow.png" alt="" />
                    <p>
                      Step <span>4</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default helpstirwork;

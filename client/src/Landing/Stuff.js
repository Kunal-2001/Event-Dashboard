import React, { Component } from "react";
import logo1 from "../images/Business_PNG.png";
import logo2 from "../images/Coding_PNG.png";

class Stuff extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title"></div>
        <div className="row">
          <h1 className="title">Some salient features of Event Dashboard</h1>
          <br />
          <span className="thumbnail col-md-4">
            <div className="container3">
              <img src={logo1} alt="logo1" />
              <div className="details">
                <h1>
                  We show you real time statistics to keep you up to date with
                  real time numbers.
                </h1>
              </div>
            </div>
          </span>
          <span className="thumbnail col-md-4">
            <div className="container3">
              <img src={logo2} alt="logo1" />
              <div className="details">
                <h1>
                  Our easy to use UI helps managing events efficiently and
                  accurately.
                </h1>
              </div>
            </div>
          </span>
          <span className="thumbnail col-md-4">
            <div className="container3">
              <img src={logo1} alt="logo3" />
              <div className="details">
                <h1>
                  Customizability to help you choose what you really want in
                  your stellar event.
                </h1>
              </div>
            </div>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Stuff;

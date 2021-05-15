import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="black-colour">
          <center>
            <div className="share">
              <span className="a">
                <i className="fas fa-share-alt"></i> Share!
              </span>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <br />
            <p>&copy; Microsoft Student Partner Club 2020</p>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;

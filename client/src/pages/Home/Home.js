import React, { Component } from "react";
import Slideshow from "../../components/Slideshow";
import Newsfeed from "../../components/NewsFeed";

class Home extends Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Slideshow />
            <Newsfeed />
          </div>
        </div>
      </div>
    )
  }
};

export default Home;

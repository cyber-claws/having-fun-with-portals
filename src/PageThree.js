import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageThree extends Component {
  render() {
    return (
      <div className="pages three">
        <h1>
            <Link to={"/"}>Go to firsy page</Link>
        </h1>
      </div>
    );
  }
}

export default PageThree;

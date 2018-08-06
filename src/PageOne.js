import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageOne extends Component {
  render() {
    return (
      <div className="pages one">
        <h1>
          <Link to={"/pg2"}>Go to second page</Link>
        </h1>
      </div>
    );
  }
}

export default PageOne;

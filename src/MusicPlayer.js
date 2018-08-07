import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * A Portal can have a shared state with it's parent.
 * Here we have passed the prop variable "parentState"
 * and it will update with the parent.
 */
class MusicPlayer extends Component {
  render() {
    return ReactDOM.createPortal(
        <div className="portal">
            <h1>
                {`Always Visible Mock Media Player! ${this.props.parentState}`}
            </h1>
        </div>,
        document.getElementById('portal')
    );
  }
}

export default MusicPlayer;

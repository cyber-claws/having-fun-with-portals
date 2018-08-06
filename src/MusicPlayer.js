import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MusicPlayer extends Component {
  render() {
    return ReactDOM.createPortal(
        <div className="portal">
            <h1>
                Always Visible Mock Media Player!
            </h1>
        </div>,
        document.getElementById('portal')
    );
  }
}

export default MusicPlayer;

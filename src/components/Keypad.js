import React from 'react';

export default class Keypad extends React.Component {

  keyed = () => {
    console.log("Entering password...")
  };

  render() {
    return (
      <input type="password" onKeyUp={this.keyed}></input>
    );
  }
}

import React from 'react';

export default class Header extends React.Component {

  render() {

    var divStyle = {
      height: '200px',
      backgroundColor: this.props.color
    };

    return (
      <div id="header" style={divStyle}>
        <img  src={this.props.logo}></img>
      </div>
    )
  }
}

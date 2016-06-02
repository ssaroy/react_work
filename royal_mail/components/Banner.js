import React from 'react'

export default class Banner extends React.Component {

  render() {

    var divStyle = {
      width: '1000px',
      margin: '0 auto',
      position: 'relative'
    }

    var spanStyle = {
      position: 'absolute',
      color: 'white',
      right: '30px',
      bottom: '30px',
      fontSize: '42px',
    }

    return (
      <div style={divStyle}>
        <img src={this.props.image}></img>
        <span style={spanStyle}>Illuminating opportunities</span>
      </div>
    )
  }

}

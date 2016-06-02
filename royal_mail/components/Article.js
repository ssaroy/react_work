import React from 'react'

export default class Article extends React.Component {



  render() {

    var divStyle = {
      width: '60%',
      float: 'left',
      paddingRight: '10%'
    }

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>
        {this.props.body}
      </div>
    )
  }
}

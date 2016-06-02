import React from 'react'

export default class Sidebar extends React.Component {

  render() {

    var divStyle = {
      width: '30%',
      backgroundColor: 'rgb(209, 209, 209)',
      float: 'right',
    }

    var innerStyle = {
        padding: '10px 10px 20px 10px'
    }

    var nodeStyle = {
    }

    var insightNodes = this.props.data.map(function(insight) {
      return (
        <div style={nodeStyle}>
          <h3>{insight.title}</h3>
          {insight.body}
        </div>
      )
    })

    return (
      <div style={divStyle}>
        <div style={innerStyle}>
          <h2>Our insights</h2>
          {insightNodes}
        </div>
      </div>
    )
  }
}

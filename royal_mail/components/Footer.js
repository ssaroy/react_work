import React from 'react'

export default class Footer extends React.Component {

  render() {

    var divStyle = {
      clear:'both',
      backgroundColor: 'rgb(52, 52, 52)',
    };

    var innerStyle = {
      width: '1000px',
       margin: '0 auto'
    }

    var a = {
      padding: '30px 30px 30px 0px',
      display: 'inline-block',
      textDecoration: 'none',
      color: 'white',
      fontSize: '15px'
    }

    var footerNodes = this.props.data.map(function(item) {
      return (
        <a style={a} href={item.url}>{item.title}</a>
      )
    })

    return (
      <div style={divStyle}>
        <div style={innerStyle}>
          {footerNodes}
        </div>
      </div>
    )
  }
}

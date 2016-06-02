import React from 'react'

export default class Nav extends React.Component {

  render() {

    var divStyle = {
      overflow: 'hidden',
      backgroundColor: 'rgb(52, 52, 52)',
    };

    var navItems1 = {
      float: 'left'
    }

    var navItems2 = {
      float: 'right',
      padding: '10px 30px',
      display: 'inline-block',
      color: 'white',
      textDecoration: 'none',
      fontSize: '19px'
    }

    var a = {
      padding: '10px 30px',
      display: 'inline-block',
      color: 'white',
      textDecoration: 'none',
      fontSize: '19px'
    }

    var navItems = this.props.navItems.map(function(item) {
        return (
          <a style={a} href={item.url}>{item.title}</a>
        )
    });

    return (
      <div style={divStyle}>
        <div style={{width: '1000px', margin: '0 auto'}}>
          {navItems}
          <a style={navItems2} href='#'>Login </a>
        </div>
      </div>
    )
  }
}

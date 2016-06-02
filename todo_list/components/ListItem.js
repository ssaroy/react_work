import React from 'react'

export default class ListItem extends React.Component {

  render() {

    var task = this.props.data

    return (
      <tr>
        <td style = {{
          paddingBottom: '10px'
        }}>
          {task}
        </td>
      </tr>
    )
  }
}

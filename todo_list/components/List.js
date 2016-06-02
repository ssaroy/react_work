import React from 'react'
import ListItem from './ListItem'

export default class List extends React.Component {

  render() {

    var tasks = this.props.data.map(function(task) {
      return (
        <ListItem key={task.id} data={task.text}/>
      )
    })

    return (
      <div>
      <table>
        <tbody>
          {tasks}
        </tbody>
      </table>
      </div>
    )
  }
}

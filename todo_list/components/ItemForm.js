import React from 'react'
import ReactDOM from 'react-dom'
import Tasks from '../tasks'

export default class ItemForm extends React.Component {

  handleSubmit() {
    var task = ReactDOM.findDOMNode(this.refs.task).value
    this.props.onTaskSubmit(task)
  }

  render() {
    return (
      <div style={{
        paddingBottom: '30px'
      }}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Add: <input type="text" ref="task" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

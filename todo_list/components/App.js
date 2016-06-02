import React from 'react'
import ItemForm from './ItemForm'
import List from './List'
import Tasks from '../tasks'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: Tasks
    }
  }

  handleSubmit(task) {
    console.log(task);
    // submit to json file
  }

  render() {
    return (
      <div style={{
        borderStyle: 'solid',
        padding: '50px 25px',
        display: 'inline-block'
      }}>
        <ItemForm onTaskSubmit={this.handleSubmit.bind(this)} />
        <List data={this.state.data} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    name: { firstName: 'Motley', lastName: 'Penguin' },
    company: 'MP'
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>App</h1>
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: 'Cherry', lastName: 'Mulliss' }, company: 'Home' })
              console.log(this.state)
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    )
  }
}

export default App
// callback fn

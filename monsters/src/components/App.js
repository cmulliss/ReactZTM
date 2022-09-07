import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    name: 'Motley'
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>App</h1>
          <p>Hello {this.state.name}</p>
          <button onClick={() => {
            
          }}>Change Name</button>
        </header>
      </div>
    )
  }
}

export default App
// callback fn

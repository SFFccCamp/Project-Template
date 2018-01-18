import React, { Component } from 'react'

import styles from './App.scss'

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    console.log(this.state.users)
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <h1 className="App-title">Scaffold</h1>
          <div>hello</div>
        </header>
        <p>What's up!</p>
      </div>
    )
  }
}

export default App

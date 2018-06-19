import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Github.css'
import Pokemon from './Pokemon'

class Pokedex extends Component {
  state = {
    username: '',
  }

  handleChange = (ev) => {
    this.setState({ username: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokedex/${this.state.username}`)
  }

  render() {
    return (
      <div className="Github">
        <img
          src="http://timoliver.blog/wp-content/uploads/2011/03/iPokedex_Logo.png"
          alt="GitHub"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter a Pokemon"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up a Shiny Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokedex/:username" component={Pokemon} />
      </div>
    )
  }
}

export default Pokedex
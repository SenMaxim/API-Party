import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state

    /*
    return (
      <div className="GithubUser">
        <img src={user.avatar_url} alt="" />
        <h2>
          <a href={user.html_url} target="_blank">
            {user.name} ({user.login})
          </a>
        </h2>
        <h3>{user.location}</h3>
      </div>
    )
    */
   if (user.sprites) {
        console.log("The name of the pokemon is " + user.sprites.back_default)
        console.log(user.sprites.back_default)

        return (
            <div className="GithubUser">
            <img src={user.sprites.front_shiny} alt="" />
            <h2>
                {user.forms[0].name}
            </h2>
        </div>
        )
    }
    else {
        return (
            <h1>Waiting</h1>
        )
    }
   }
}

export default Pokemon
import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

    state ={
      toggleBack: true
    }

    toggleImage = () => {
      this.setState({
        toggleBack: !this.state.toggleBack
      })
    }

    togglePokemon = () => {
      let {front, back} = this.props.pokemon.sprites;
      return this.state.toggleBack ? front : back
      }

    render() {
      let {name, stats} = this.props.pokemon;
      // console.log(name, stats)

      return (
        <Card onClick={this.toggleImage}>
          <div>
            <div className="image">
              <img src={this.togglePokemon()} alt={`picture of the ${name}`} />
            </div>
            <div className="content">
              <div className="header">{name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {stats.find(stat => stat.name === "hp").value} hp
              </span>
            </div>
          </div>
        </Card>
      )
    }
  }

export default PokemonCard

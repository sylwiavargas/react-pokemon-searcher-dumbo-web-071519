import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  //we need to toLowerCase it
  filterPokemon = () => {
    return this.props.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.input))
  }

  renderAllPokemon = () => {
    return this.filterPokemon()
      .map(pokemon => {
      return (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      )}
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderAllPokemon()}
      </Card.Group>
    )
  }
  
}

export default PokemonCollection

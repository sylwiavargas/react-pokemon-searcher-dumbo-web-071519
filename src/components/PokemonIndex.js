import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonPage extends React.Component {

state={
  pokemons: [],
  input: ""
}


  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

  postPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(newPok => {
      console.log(newPok);
      this.setState({
        pokemons: [...this.state.pokemons, newPok]
      })
    })
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  searchChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      input: e.target.value
    })
  }

  // we need to first find a stat + take its value and then compare it to another pokemon's stat.value
  sortHp = () => {
    const filteredPok = this.state.pokemons.sort((pok1, pok2) => {
      return pok1.stats.find(stat => stat.name === "hp").value - pok2.stats.find(stat => stat.name === "hp").value
    } )
    this.setState({
      pokemons: filteredPok
    })
  }

  // here we don't need to do that because name is not a nested object
  sortName = () => {
    const filteredPok = this.state.pokemons.sort((pok1, pok2) => {
      return pok1.name.localeCompare(pok2.name)
    })
    this.setState({
      pokemons: filteredPok
    })
  }


  render() {
    let {input, pokemons} = this.state

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <button onClick={this.sortHp}>Sort by HP</button>
        <button onClick={this.sortName}>Sort by name</button>
        <Search onSearchChange={this.searchChange} value={input} showNoResults={false} />
        <br />
        <PokemonCollection input={input} pokemons={pokemons} />
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

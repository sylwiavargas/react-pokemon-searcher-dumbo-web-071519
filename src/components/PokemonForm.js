import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
 
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

onInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}



handleSubmit = (e) => {
  e.preventDefault()
  const pokemon = {
  name: this.state.name,
  stats: [{ value: this.state.hp, name: "hp" }],
  sprites: { front: this.state.frontUrl, back: this.state.backUrl }
  }
  this.props.postPokemon(pokemon)
}

render() {
  // console.log(this.state)
  let {name, hp, frontUrl, backUrl} = this.state
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            onChange={this.onInputChange} 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name} 
          />
          <Form.Input 
            onChange={this.onInputChange} 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp} 
          />
          <Form.Input 
            onChange={this.onInputChange} 
            fluid label="Front Image URL" 
            placeholder="url" 
            name="frontUrl" 
            value={frontUrl} 
          />
          <Form.Input 
            onChange={this.onInputChange} 
            fluid label="Back Image URL" 
            placeholder="url" 
            name="backUrl" 
            value={backUrl} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}
}

export default PokemonForm

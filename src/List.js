import React, { Component } from 'react'

import Details from './Details'

import './css/list.scss'


export default class List extends Component
{
  constructor(props)
  {
    super(props);

    const {characters} = props

    this.state = {active: characters[0].id, characters}

    this.findActiveCharacter = (function(character)
    {
      return character.id === this.state.active
    }).bind(this)
  }

  _renderCharacter({gender, id: active, image, name, origin, species, status})
  {
    return (
      <div key={name} onClick={()=>this.setState({active})} style={{marginBottom: 10, marginTop: 10}}>
        <img alt={name} src={image} style={{borderRadius: 22, width: 44}}/>
        <div>
          <h3 style={{color: '#FFFFFF', fontFace: 'Avenir-Heavy', fontSize: 18}}>{name}</h3>
          <span style={{color: '#81D232 100%', fontFace: 'Avenir-Medium', fontSize: 13}}>{species} {gender}, {origin.name}</span>
        </div>
        <div style={{border: '1px inside * #81D232 100%', color: 'rgba(255, 255, 255, 0.4)', radius: 4}}>
          <span>{status}</span>
        </div>
      </div>
    )
  }

  render()
  {
    const {characters} = this.state

    return (
      <div className="list" style={{borderBottomLeftRadius: 32, borderTopLeftRadius: 32}}>
        <div style={{margin: 32}}>
          <h2 style={{color: '#FFFFFF 100%', fontFace: 'Avenir-Black', fontSize: 28}}>Characters</h2>
          <div style={{marginTop: 16, overflow: 'auto'}}>
            {characters.map(this._renderCharacter.bind(this))}
          </div>
        </div>
        <Details character={characters.find(this.findActiveCharacter)}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import classnames from 'classnames'

import './css/list.scss'


export default class List extends Component
{
  constructor(props)
  {
    super(props);

    const {characters} = props

    this.state = {characters}
  }

  _renderCharacter({gender, id, image, name, origin, species, status})
  {
    const {setActive} = this.props

    return (
      <li key={name} onClick={setActive.bind(null, id)}
        style={{alignItems: 'center', display: 'flex', marginBottom: 10, marginTop: 10}}>
        <img alt={name} src={image} style={{borderRadius: 22, marginRight: 16, width: 44}}/>
        <div style={{flex: 1}}>
          <h3 style={{color: '#FFFFFF', fontFace: 'Avenir-Heavy', fontSize: 18}}>{name}</h3>
          <span style={{color: '#81D232', fontFace: 'Avenir-Medium', fontSize: 13}}>{species} {gender}, {origin.name}</span>
        </div>
        <span className={classnames(['status', status])}>{status.toUpperCase()}</span>
      </li>
    )
  }

  render()
  {
    const {characters} = this.state

    return (
      <div className='listBackground'>
        <nav className="list" style={{
          // width: '0%'
        }}>
          <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
            // visibility: 'hidden'
          }}>
            <h2 style={{color: '#FFFFFF 100%', fontFace: 'Avenir-Black', fontSize: 28, marginBottom: 16}}>Characters</h2>
            <ul style={{overflowY: 'auto', paddingRight: 32}}>
              {characters.map(this._renderCharacter.bind(this))}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

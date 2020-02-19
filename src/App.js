import React, { Component } from 'react'

import Detail from './Detail'
import LeftBanner from './LeftBanner'
import Loader from './Loader'
import List from './List'

import './css/app.scss'


export default class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {}

        fetch('https://rickandmortyapi.com/api/character/')
        .then(function(result)
        {
            return result.json()
        }, console.error)
        .then(({results: characters}) => {
            this.setState({active: characters[0].id, characters})
        })

        this.findActiveCharacter = ({id}) => id === this.state.active
        this.setActive = active => this.setState({active})
    }

    _renderMain()
    {
        const {characters} = this.state

        if(!characters) return <Loader isLoading={true}/>

        return (
            <>
                <List setActive={this.setActive} characters={characters}/>
                <Detail character={characters.find(this.findActiveCharacter)}/>
            </>
        )
}

    render()
    {
        return (
            <div className="App" style={{display: 'flex'}}>
                <LeftBanner/>
                {this._renderMain()}
            </div>
        );
    }
}

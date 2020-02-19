import React, { Component } from 'react'

import LeftBanner from './LeftBanner'
import Loader from './Loader'
import List from './List'

import './css/app.scss'


export default class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            loading: true
        }

        fetch('https://rickandmortyapi.com/api/character/')
        .then(function(result)
        {
            return result.json()
        }, console.error)
        .then(({results: characters}) => {
            this.setState({characters, loading: false})
        })
    }

    render()
    {
        const {characters, loading} = this.state

        return (
            <div className="App">
                <LeftBanner/>
                <Loader isLoading={loading}/>
                {characters && <List characters={characters}/>}
            </div>
        );
    }
}

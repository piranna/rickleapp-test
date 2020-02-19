import React from 'react'

import RightBanner from './RightBanner'


function renderEpisode(episode)
{
  let key = episode.split('/')
  key = key[key.length-1]

  return (
    <div key={key} style={{fill: '#FFFFFF 20%', height: 40, radius: 8, width: 40}}>
      <a href={episode} style={{color: '#FFFFFF 100%', fontFace: 'Avenir-Medium', fontSize: 18}}>{key}</a>
    </div>
  )
}


export default function({character})
{
  const {episode, gender, image, name, origin, species} = character

  return(
    <div style={{margin: 36, width: 480}}>
      <img alt={name} src={image} style={{borderRadius: 16, height: 184, width: 240}}/>
      <section style={{marginTop: 20}}>
        <h2 style={{color: '#FFFFFF 100%', fontFace: 'Avenir-Black', fontSize: 28, marginBottom: 4}}>{name}</h2>
        <span style={{color: '#81D232 100%', fontFace: 'Avenir-Medium', fontSize: 15}}>{species} {gender}, {origin.name}</span>
      </section>
      <section style={{marginTop: 32}}>
        <h3 style={{marginBottom: 16}}>Episodes</h3>
        {episode.map(renderEpisode)}
      </section>
      <RightBanner name={character.name}/>
    </div>
  )
}

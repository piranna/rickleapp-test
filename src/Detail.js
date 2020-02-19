import React from 'react'

import RightBanner from './RightBanner'

import './css/detail.scss'


function renderEpisode(episode)
{
  let key = episode.split('/')
  key = key[key.length-1]

  return (
    <a href={episode} key={key} style={{background: '#FFFFFF 20%', borderRadius: 8, height: 40, width: 40, marginTop: 12, marginRight: 16}}>
      <span style={{color: '#FFFFFF 100%', fontFace: 'Avenir-Medium', fontSize: 18}}>{key}</span>
    </a>
  )
}


export default function({character})
{
  const {episode, gender, image, name, origin, species} = character

  return(
    <div className='detail'>
      <RightBanner name={name}/>
      <article style={{display: 'flex', flexDirection: 'column'}}>
        <img alt={name} src={image} style={{borderRadius: 16, height: 184, width: 240}}/>
        <section style={{marginTop: 20}}>
          <h2 style={{color: '#FFFFFF 100%', fontFace: 'Avenir-Black', fontSize: 28, marginBottom: 4}}>{name}</h2>
          <span style={{color: '#81D232', fontFace: 'Avenir-Medium', fontSize: 15}}>{species} {gender}, {origin.name}</span>
        </section>
        <section style={{height: '100%', marginTop: 32}}>
          <h3 style={{marginBottom: 4}}>Episodes</h3>
          <nav style={{alignContent: 'flex-start', display: 'flex', flexWrap: 'wrap', height: '100%', justifyContent: 'space-between', overflowY: 'auto', width: 280}}>
            {episode.map(renderEpisode)}
          </nav>
        </section>
      </article>
    </div>
  )
}

import React from 'react'

import RightBanner from './RightBanner'

import './css/detail.scss'


function renderEpisode(episode)
{
  let key = episode.split('/')
  key = key[key.length-1]

  return (
    <a href={episode} key={key} style={{
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 8,
      color: '#FFFFFF',
      display: 'flex',
      fontFace: 'Avenir-Medium',
      fontSize: 18,
      height: 40,
      justifyContent: 'center',
      textDecoration: 'none'
    }}>
      {key}
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
          <h3 style={{marginBottom: 16}}>Episodes</h3>
          <nav style={{
            columnGap: 16,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 40px)',
            justifyContent: 'space-between',
            overflowY: 'auto',
            rowGap: 12
          }}>
            {episode.map(renderEpisode)}
          </nav>
        </section>
      </article>
    </div>
  )
}

import React from 'react'

import morty from './img/morty.png'
import rick from './img/rick.png'


export default function()
{
  return(
    <header style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: 80}}>
      <img alt="" src={rick} style={{borderBottom: 20, borderTop: 20, height: 44}}/>
      <h1 style={{flex: 1, textOrientation: 'upright', width: 14, writingMode: 'vertical-rl'}}>RICKLEAPP</h1>
      <img alt="" src={morty} style={{borderBottom: 20, borderTop: 20, height: 28}}/>
    </header>
  )
}

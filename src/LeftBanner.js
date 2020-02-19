import React from 'react'

import morty from './img/morty.png'
import rick from './img/rick.png'


export default function()
{
  return(
    <div style={{width: 80}}>
      <img alt="" src={rick} style={{borderBottom: 20, borderTop: 20, height: 44}}/>
      <h1 style={{writingMode: 'vertical-rl', textOrientation: 'upright', width: 14}}>RICKLEAPP</h1>
      <img alt="" src={morty} style={{borderBottom: 20, borderTop: 20, height: 28}}/>
    </div>
  )
}

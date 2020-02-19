import React from 'react'


const style =
{
  color: '#FFFFFF 100%',
  float: 'right',
  fontFace: 'Avenir-Black',
  fontSize: 100,
  opacity: '8%',
  textOrientation: 'mixed',
  writingMode: 'vertical-rl'
}


export default function({name})
{
  return(
    <span style={style}>{name}</span>
  )
}

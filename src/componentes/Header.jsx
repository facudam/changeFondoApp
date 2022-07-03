import React from 'react'

export const Header = ({ img }) => {
  return (
    <header>
        <img src={ img } alt=''></img>
        <h1>Presiona un botón y elegí el color o la imagen</h1>
    </header>
  )
}

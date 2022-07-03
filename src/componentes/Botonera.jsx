import React, { useState } from 'react'

export const Botonera = ({ colour, url }) => {

    const [inputColorChange, setInputColorChange] = useState('#ffffff');
    const [inputUrlChange, setInputUrlChange] = useState('');

    const obtenerColor = (e) => {
        setInputColorChange(e.target.value)
        if (inputColorChange.trim().length <= 1) return;
        colour(e.target.value);
        
        
    }

    const insertarUrl = (e) => {
        let newUrl = e.target.value;
        setInputUrlChange(newUrl)
        url(newUrl)   
    }

  return (
    <div className='botonera'>
        <div className='input-color-div'>
            <p>Escogé un color de fondo</p>
            <input id='input-color' type='color' value={ inputColorChange } onInput={ obtenerColor }/>
        </div>
        
        <input className='url-input' type='url' placeholder='Insertá la url de tu imagen' onInput={ insertarUrl } value={ inputUrlChange } />
    </div>
  )
}

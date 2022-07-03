
import { useState } from 'react';
import './App.css';
import { Botonera } from './componentes/Botonera';
import { Header } from './componentes/Header';

function App() {

  const [urlImagen, setUrlImagen ] = useState('https://cdn.pixabay.com/photo/2022/06/21/21/56/konigssee-7276585__480.jpg');

  const [ colorFondo, setColorFondo ] = useState('#ffffff')

  document.body.style.backgroundColor = colorFondo;

  const url = (link) => {
    setUrlImagen(link)
    
  }

  const colour = (color) => {
    setColorFondo(color)
  }

  return (
    <div className="App">
      <Header
        img={ urlImagen }
       />
       <Botonera 
         colour={ colour }
         url={ url }
       />
    </div>
  );
}

export default App;

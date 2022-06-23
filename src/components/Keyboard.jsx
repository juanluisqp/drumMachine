import React, { Fragment } from 'react'
import KeyboardKey from './KeyboardKey';


const Keyboard = ({sound, setDisplay}) => { // Este es el componente que se encarga de mostrar el teclado  
       return sound.map(({id, url, keyTrigger, keyCode},index) => <KeyboardKey setDisplay={setDisplay} id={id} url={url} keyTrigger={keyTrigger} 
       keyCode={keyCode} keys={index} key={index} />   )   
  };

export default Keyboard;
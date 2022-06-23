import React from 'react';

const KeyboardKey = ({id, setDisplay, keyTrigger, url, keyCode, keys}) => {
    const play = (key) => { // Esta es la funcion que se encarga de reproducir el sonido
        const audio = document.getElementById(key)
        audio.currentTime = 0;
        audio.play()
        setDisplay(id)
        }
    const handleKeydown = (e) => { // Funcion para que cuando se presiona una tecla ejecute la funcion play
        if (e.keyCode === keyCode) {
            play(keyTrigger)
            }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        }, [])
    
    return (             
        <button className='drum-pad' id={keys} onClick = {()=> play(keyTrigger)} >          
            <audio className='clip' id={keyTrigger} src={url}></audio>
            {keyTrigger}
        </button>    
    )
}

export default KeyboardKey;
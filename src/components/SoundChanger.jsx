import React from 'react';

const SoundChanger = ({changeSoundGroup}) => {
    return (    
    <div className='soundChanger'>
        <button onClick={changeSoundGroup}>Change sound group</button>
    </div>
    )
}

export default SoundChanger;
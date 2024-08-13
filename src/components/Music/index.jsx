import React, { useState } from 'react';
import Howler from 'react-howler';
import { FaPlay, FaPause } from 'react-icons/fa';
import './style.css'

const Music = () => {
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        setPlaying(!playing);
    };

    return (
        <div className='musica'>
            <Howler
                src="/sugar.mp3"
                playing={playing}
                loop={true}
            />
            <button onClick={togglePlay}>
                {playing ? <FaPause size={21} /> : <FaPlay size={21} />}
            </button>
        </div>
    );
};

export default Music;
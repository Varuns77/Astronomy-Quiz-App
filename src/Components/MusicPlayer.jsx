import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box } from '@mui/material';

function MusicPlayer() {
  
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(new Audio('/Day One.mp3'));

    useEffect(() => {
        // Play music when the component is mounted
        audioRef.current.loop = true;
        audioRef.current.play(); // Ensure the audio starts playing when mounted

        // Clean up function to pause the music when the component is unmounted
        return () => {
            audioRef.current.pause();
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <PlayContainer>
            <IconButton className="play-btn" onClick={togglePlay}>
                <MusicNoteIcon />
            </IconButton>
        </PlayContainer>
    );
}

export default MusicPlayer;

const PlayContainer = styled(Box)({
    position: 'absolute',
    bottom: '5%',
    right: '2%',

    '.play-btn': {
        borderRadius: '20px',
        padding: '5px',
        cursor: 'pointer',
        color: 'black',
        backgroundColor: 'white',

        '&:hover': {
            backgroundColor: 'grey',
        },
    },
});
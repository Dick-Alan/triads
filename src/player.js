import React from 'react';
import './chords.css'
import * as Tone from 'tone';
const synth = new Tone.PolySynth();



const Player = (props) => {
    function playSynth() {
        synth.triggerAttackRelease(props.chord, "4n").toDestination()
    
    
    }
    return (
        <div id='wrapper'>
            <button className='play' onClick={playSynth}> Play </button>

        </div>
    )
}

export default Player;

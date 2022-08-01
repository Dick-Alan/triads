import React from 'react';

import './chords.css'
import Player from './player';


const Chords =(props)=> {

   var chord = []
    const chordList = props.answer.map((a) => {
        if (props.keyz === 'C' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['C3', 'E3', 'G3'])
            props.answer.indexOf(a) === 1&&(chord = ["D3", "F3", "A3"])
            props.answer.indexOf(a) === 2&&(chord = ["E3", "G3", "B3"])
            props.answer.indexOf(a) === 3&&(chord = ["F3", "A3", "C4"])
            props.answer.indexOf(a) === 4&&(chord = ["G3", "B3", "D4"])
            props.answer.indexOf(a) === 5&&(chord = ["A3", "C4", "E4"])
            props.answer.indexOf(a) === 6&&(chord = ["B3", "D4", "F4"])
        }
        if (props.keyz === 'C' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['C3', 'Eb3', 'G3'])
            props.answer.indexOf(a) === 1&&(chord = ["D3", "F3", "Ab3"])
            props.answer.indexOf(a) === 2&&(chord = ["Eb3", "G3", "Bb3"])
            props.answer.indexOf(a) === 3&&(chord = ["F3", "Ab3", "C4"])
            props.answer.indexOf(a) === 4&&(chord = ["G3", "B3", "D4"])
            props.answer.indexOf(a) === 5&&(chord = ["Ab3", "C4", "Eb4"])
            props.answer.indexOf(a) === 6&&(chord = ["Bb3", "D4", "F4"])
        }
        if (props.keyz === 'C♯' | props.keyz === "D♭" && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['C#3', 'E#3', 'G#3'])
            props.answer.indexOf(a) === 1&&(chord = ["D#3", "F#3", "A#3"])
            props.answer.indexOf(a) === 2&&(chord = ["E#3", "G#3", "B#3"])
            props.answer.indexOf(a) === 3&&(chord = ["F#3", "A#3", "C#4"])
            props.answer.indexOf(a) === 4&&(chord = ["G#3", "B#3", "D#4"])
            props.answer.indexOf(a) === 5&&(chord = ["A#3", "C#4", "E#4"])
            props.answer.indexOf(a) === 6&&(chord = ["B#3", "D#4", "F#4"])
        }
        if (props.keyz === 'C♯' | props.keyz === "D♭" && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['C#3', 'E3', 'G#3'])
            props.answer.indexOf(a) === 1&&(chord = ["D#3", "F#3", "A3"])
            props.answer.indexOf(a) === 2&&(chord = ["E3", "G#3", "B3"])
            props.answer.indexOf(a) === 3&&(chord = ["F#3", "A3", "C#4"])
            props.answer.indexOf(a) === 4&&(chord = ["G#3", "B#3", "D#4"])
            props.answer.indexOf(a) === 5&&(chord = ["A3", "C#4", "E4"])
            props.answer.indexOf(a) === 6&&(chord = ["B3", "D#4", "F#4"])
        }
        if (props.keyz === 'D' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['D3', 'F#3', 'A3'])
            props.answer.indexOf(a) === 1&&(chord = ["E3", "G3", "B3"])
            props.answer.indexOf(a) === 2&&(chord = ["F#3", "A3", "C#4"])
            props.answer.indexOf(a) === 3&&(chord = ["G3", "B3", "D4"])
            props.answer.indexOf(a) === 4&&(chord = ["A3", "C4", "E4"])
            props.answer.indexOf(a) === 5&&(chord = ["B3", "D4", "F#4"])
            props.answer.indexOf(a) === 6&&(chord = ['C#3', 'Eb3', 'G3'])
        }
        if (props.keyz === 'D' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['D3', 'F3', 'A3'])
            props.answer.indexOf(a) === 1&&(chord = ["E3", "G3", "Bb3"])
            props.answer.indexOf(a) === 2&&(chord = ["F3", "A3", "C4"])
            props.answer.indexOf(a) === 3&&(chord = ["G3", "Bb3", "D4"])
            props.answer.indexOf(a) === 4&&(chord = ["A3", "C#4", "E4"])
            props.answer.indexOf(a) === 5&&(chord = ["Bb3", "D4", "F4"])
            props.answer.indexOf(a) === 6&&(chord = ['C3', 'E4', 'G4'])
        }
        if (props.keyz === 'E♭' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['Eb3', 'G3', 'Bb3'])
            props.answer.indexOf(a) === 1&&(chord = ["F3", "Ab3", "C3"])
            props.answer.indexOf(a) === 2&&(chord = ["G3", "Bb3", "D4"])
            props.answer.indexOf(a) === 3&&(chord = ["Ab3", "C3", "Eb4"])
            props.answer.indexOf(a) === 4&&(chord = ["Bb3", "D4", "F4"])
            props.answer.indexOf(a) === 5&&(chord = ["C3", "Eb4", "G4"])
            props.answer.indexOf(a) === 6&&(chord = ['D3', 'F4', 'A4'])
        }
        if (props.keyz === 'E♭' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['Eb3', 'Gb3', 'Bb3'])
            props.answer.indexOf(a) === 1&&(chord = ["F3", "Ab3", "Cb3"])
            props.answer.indexOf(a) === 2&&(chord = ["Gb3", "Bb3", "Db4"])
            props.answer.indexOf(a) === 3&&(chord = ["Ab3", "Cb3", "Eb4"])
            props.answer.indexOf(a) === 4&&(chord = ["Bb3", "D4", "F4"])
            props.answer.indexOf(a) === 5&&(chord = ["Cb3", "Eb4", "Gb4"])
            props.answer.indexOf(a) === 6&&(chord = ['Db3', 'F4', 'Ab4'])
        }
        if (props.keyz === 'E' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['E3', 'G#3', 'B3'])
            props.answer.indexOf(a) === 1&&(chord = ["F#3", "A3", "C#4"])
            props.answer.indexOf(a) === 2&&(chord = ["G#3", "B3", "D#4"])
            props.answer.indexOf(a) === 3&&(chord = ["A3", "C#3", "E4"])
            props.answer.indexOf(a) === 4&&(chord = ["B3", "D#4", "F#4"])
            props.answer.indexOf(a) === 5&&(chord = ["C#3", "E4", "G#4"])
            props.answer.indexOf(a) === 6&&(chord = ['D#3', 'F#4', 'A4'])
        }
        if (props.keyz === 'E' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['E3', 'G3', 'B3'])
            props.answer.indexOf(a) === 1&&(chord = ["F#3", "A3", "C4"])
            props.answer.indexOf(a) === 2&&(chord = ["G3", "B3", "D4"])
            props.answer.indexOf(a) === 3&&(chord = ["A3", "C3", "E4"])
            props.answer.indexOf(a) === 4&&(chord = ["B3", "D#4", "F#4"])
            props.answer.indexOf(a) === 5&&(chord = ["C3", "E4", "G4"])
            props.answer.indexOf(a) === 6&&(chord = ['D3', 'F#4', 'A4'])
        }
        if (props.keyz === 'F' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['F3', 'A3', 'C4'])
            props.answer.indexOf(a) === 1&&(chord = ["G3", "Bb3", "D4"])
            props.answer.indexOf(a) === 2&&(chord = ["A3", "C3", "E4"])
            props.answer.indexOf(a) === 3&&(chord = ["Bb3", "D3", "F4"])
            props.answer.indexOf(a) === 4&&(chord = ["C4", "E4", "G4"])
            props.answer.indexOf(a) === 5&&(chord = ["Db3", "F4", "A4"])
            props.answer.indexOf(a) === 6&&(chord = ['E3', 'G4', 'Bb4'])
        }
        if (props.keyz === 'F' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['F3', 'Ab3', 'C4'])
            props.answer.indexOf(a) === 1&&(chord = ["G3", "Bb3", "Db4"])
            props.answer.indexOf(a) === 2&&(chord = ["Ab3", "C3", "Eb4"])
            props.answer.indexOf(a) === 3&&(chord = ["Bb3", "Db3", "F4"])
            props.answer.indexOf(a) === 4&&(chord = ["C4", "E4", "G4"])
            props.answer.indexOf(a) === 5&&(chord = ["Db3", "F4", "Ab4"])
            props.answer.indexOf(a) === 6&&(chord = ['Eb3', 'G4', 'Bb4'])
        }
        if (props.keyz === 'F♯'| props.keyz ==='G♭' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['F#3', 'A#3', 'C#4'])
            props.answer.indexOf(a) === 1&&(chord = ["G#3", "B3", "D#4"])
            props.answer.indexOf(a) === 2&&(chord = ["A#3", "C#3", "E#4"])
            props.answer.indexOf(a) === 3&&(chord = ["B3", "D#3", "F#4"])
            props.answer.indexOf(a) === 4&&(chord = ["C#4", "E#4", "G#4"])
            props.answer.indexOf(a) === 5&&(chord = ["D#3", "F#4", "A#4"])
            props.answer.indexOf(a) === 6&&(chord = ['E#3', 'G#4', 'B4'])
        }
        if (props.keyz === 'F♯' | props.keyz === 'G♭' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['F#3', 'A3', 'C#4'])
            props.answer.indexOf(a) === 1&&(chord = ["G#3", "B3", "D4"])
            props.answer.indexOf(a) === 2&&(chord = ["A3", "C#3", "E4"])
            props.answer.indexOf(a) === 3&&(chord = ["B3", "D3", "F#4"])
            props.answer.indexOf(a) === 4&&(chord = ["C#4", "E#4", "G#4"])
            props.answer.indexOf(a) === 5&&(chord = ["D3", "F#4", "A4"])
            props.answer.indexOf(a) === 6&&(chord = ['E3', 'G#4', 'B4'])
        }
        if (props.keyz === 'A♭' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['Ab3', 'C3', 'Eb3'])
            props.answer.indexOf(a) === 1&&(chord = ["Bb3", "Db3", "F3"])
            props.answer.indexOf(a) === 2&&(chord = ["C4", "Eb3", "G3"])
            props.answer.indexOf(a) === 3&&(chord = ["Db4", "F3", "Ab3"])
            props.answer.indexOf(a) === 4&&(chord = ["Eb4", "G3", "Bb3"])
            props.answer.indexOf(a) === 5&&(chord = ["F4", "Ab3", "C4"])
            props.answer.indexOf(a) === 6&&(chord = ['G4', 'Bb3', 'Db4'])
        }
        if (props.keyz === 'A♭' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['Ab3', 'Cb3', 'Eb3'])
            props.answer.indexOf(a) === 1&&(chord = ["Bb3", "Db3", "Fb3"])
            props.answer.indexOf(a) === 2&&(chord = ["Cb4", "Eb3", "Gb3"])
            props.answer.indexOf(a) === 3&&(chord = ["Db4", "Fb3", "Ab3"])
            props.answer.indexOf(a) === 4&&(chord = ["Eb4", "G3", "Bb3"])
            props.answer.indexOf(a) === 5&&(chord = ["Fb4", "Ab3", "Cb4"])
            props.answer.indexOf(a) === 6&&(chord = ['Gb4', 'Bb3', 'Db4'])
        }
        if (props.keyz === 'A' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['A3', 'C#3', 'E3'])
            props.answer.indexOf(a) === 1&&(chord = ["B3", "D3", "F#3"])
            props.answer.indexOf(a) === 2&&(chord = ["C#4", "E3", "G#3"])
            props.answer.indexOf(a) === 3&&(chord = ["D4", "F#3", "A3"])
            props.answer.indexOf(a) === 4&&(chord = ["E4", "G#3", "B3"])
            props.answer.indexOf(a) === 5&&(chord = ["F#4", "A3", "C#4"])
            props.answer.indexOf(a) === 6&&(chord = ['G#4', 'B3', 'D4'])
        }
        if (props.keyz === 'A' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['A3', 'C3', 'E3'])
            props.answer.indexOf(a) === 1&&(chord = ["B3", "D3", "F3"])
            props.answer.indexOf(a) === 2&&(chord = ["C4", "E3", "G3"])
            props.answer.indexOf(a) === 3&&(chord = ["D4", "F3", "A3"])
            props.answer.indexOf(a) === 4&&(chord = ["E4", "G#3", "B3"])
            props.answer.indexOf(a) === 5&&(chord = ["F4", "A3", "C4"])
            props.answer.indexOf(a) === 6&&(chord = ['G4', 'B3', 'D4'])
        }
        if (props.keyz === 'B♭' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['Bb3', 'D3', 'F3'])
            props.answer.indexOf(a) === 1&&(chord = ["C4", "Eb3", "G3"])
            props.answer.indexOf(a) === 2&&(chord = ["D4", "F3", "A3"])
            props.answer.indexOf(a) === 3&&(chord = ["Eb4", "G3", "Bb3"])
            props.answer.indexOf(a) === 4&&(chord = ["F4", "A3", "C3"])
            props.answer.indexOf(a) === 5&&(chord = ["G4", "Bb3", "D4"])
            props.answer.indexOf(a) === 6&&(chord = ['A4', 'C3', 'Eb4'])
        }
        if (props.keyz === 'B♭' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['Bb3', 'Db3', 'F3'])
            props.answer.indexOf(a) === 1&&(chord = ["C4", "Eb3", "Gb3"])
            props.answer.indexOf(a) === 2&&(chord = ["Db4", "F3", "Ab3"])
            props.answer.indexOf(a) === 3&&(chord = ["Eb4", "Gb3", "Bb3"])
            props.answer.indexOf(a) === 4&&(chord = ["F4", "A3", "C3"])
            props.answer.indexOf(a) === 5&&(chord = ["Gb4", "Bb3", "Db4"])
            props.answer.indexOf(a) === 6&&(chord = ['Ab4', 'C3', 'Eb4'])
        }
        if (props.keyz === 'B' && props.major === true) { 
            props.answer.indexOf(a) === 0&&(chord = ['B3', 'D#3', 'F#3'])
            props.answer.indexOf(a) === 1&&(chord = ["C#4", "E3", "G#3"])
            props.answer.indexOf(a) === 2&&(chord = ["D#4", "F#3", "A#3"])
            props.answer.indexOf(a) === 3&&(chord = ["E4", "G#3", "B3"])
            props.answer.indexOf(a) === 4&&(chord = ["F#4", "A#3", "C#3"])
            props.answer.indexOf(a) === 5&&(chord = ["G#4", "B3", "D#4"])
            props.answer.indexOf(a) === 6&&(chord = ['A#4', 'C#3', 'E4'])
        }
        if (props.keyz === 'B' && props.major === false) { 
            props.answer.indexOf(a) === 0&&(chord = ['B3', 'D3', 'F#3'])
            props.answer.indexOf(a) === 1&&(chord = ["C#4", "E3", "G3"])
            props.answer.indexOf(a) === 2&&(chord = ["D4", "F#3", "A3"])
            props.answer.indexOf(a) === 3&&(chord = ["E4", "G3", "B3"])
            props.answer.indexOf(a) === 4&&(chord = ["F#4", "A#3", "C#3"])
            props.answer.indexOf(a) === 5&&(chord = ["G4", "B3", "D4"])
            props.answer.indexOf(a) === 6&&(chord = ['A4', 'C#3', 'E4'])
        }
       
        const majNames = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']
        const minNames = ['i', 'ii°', 'III', 'iv', 'V', 'VI', 'VII']
        var chordName = ''
        if (props.major === true) {
            chordName = majNames[props.answer.indexOf(a)]
        }
        else {
            chordName = minNames[props.answer.indexOf(a)]
        }
        
        return (
            <div key={a} className="chord"> 
                <div className="chordscontainer">
                    <div className="chordname">{chordName} </div>
                        <div className="chordNotes"> 
                                <div className="note">{a[0]}</div>
                                <div className="note">{a[1]}</div>
                                <div className="note">{a[2]}</div>
                               <div className="playbutton"><Player chord={chord}></Player></div> 
                               
                        </div>
                       
                </div>
                
                
              
            
            
                 
                
            </div>
        )

    })


    return (
        
        <div>

            
            {chordList}
            
            </div>
    )
 

}

export default Chords;
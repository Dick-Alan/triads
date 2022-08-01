
import React from 'react';
import Chords from './chords';




const triads = (key, major, chords) => {
    const notes = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B']
    const fifths = [3, 0, 4, 1, 5, 2, 6]
    const reverse = [6, 2, 5, 1, 4, 0, 3]
    const sharpKeys = ['G', 'D', 'A', 'E', 'B', 'F♯', 'C♯']
    const flatKeys = ['F', 'B♭', 'E♭', 'A♭', 'D♭', 'G♭', 'C♭'] 
    const tri = [
      [0, 2, 4],
      [1, 3, 5],
      [2, 4, 6],
      [3, 5, 0],
      [4, 6, 1],
      [5, 0, 2],
      [6, 1, 3]
    ]
   var relativeKey = ''
   var newNotes = []
   var scale = []  
   var newTriads = []
        
         if (major === true) {
           relativeKey = key
           console.log(`${key} major`)
         }
         else {
         
           key === 'A'  &&(relativeKey  ='C')
           key === 'B♭' &&(relativeKey = 'D♭')
           key === 'B'  &&(relativeKey  ='D')
           key === 'C'  &&(relativeKey  ='E♭')
           key === 'C♯' &&(relativeKey = 'E')
           key === 'D♭' &&(relativeKey = 'E')
           key === 'D'  &&(relativeKey  ='F')
           key === 'E♭' &&(relativeKey  ='G♭')
           key === 'E'  &&(relativeKey  ='G')
           key === 'F'  &&(relativeKey  ='A♭')
           key === 'F♯' &&(relativeKey  ='A')
           key === 'G♭' &&(relativeKey  ='A')
           key === 'G'  &&(relativeKey  ='B♭')
           key === 'A♭' &&(relativeKey  ='C♭')
           
           
          console.log(`${key} minor relative major is ${relativeKey}`) 
         }
         if (notes.indexOf(relativeKey) === 0) {
           scale = notes
           console.log('No sharps or flats')
           }   
         if (sharpKeys.indexOf(relativeKey) >= 0) {
           console.log(`${sharpKeys.indexOf(relativeKey)+1} sharps`)
           for (let c = 0; c <= sharpKeys.indexOf(relativeKey); c++) {
             newNotes = notes
             newNotes[fifths[c]] += '♯'        
           }       
           for (let a = newNotes.indexOf(relativeKey); a < notes.length; a++) {
               scale.push(notes[a])
           }
           for (let b = 0; b<newNotes.indexOf(relativeKey); b++) {
              scale.push(notes[b])
           }       
         }
         if (flatKeys.indexOf(relativeKey) >= 0) {
           console.log(`${flatKeys.indexOf(relativeKey)+1} flats`)
           for (let d = 0; d <= flatKeys.indexOf(relativeKey);  d++) {
             newNotes = notes
             newNotes[reverse[d]] += '♭'    
           }       
           for (let e = newNotes.indexOf(relativeKey); e < notes.length; e++) {
               scale.push(notes[e])
           }
           for (let f = 0; f<newNotes.indexOf(relativeKey); f++) {
              scale.push(notes[f])
           }        
         }
      for (let t = 0; t <= scale.length-1; t++ ) {
          newTriads.push([scale[tri[t][0]], scale[tri[t][1]], scale[tri[t][2]]])
       }
   
        
     var answer = []
     for (let y = 0; y < chords.length; y++) {
       if (major === true) { 
         answer.push(newTriads[chords[y]-1])
       }
       else {
          if (chords[y] === 1) {
           answer.push(newTriads[5])
     
         } 
         if (chords[y] === 2) {
           answer.push(newTriads[6])
     
         }     
         if (chords[y] === 3) {
           answer.push(newTriads[0])
     
         }
         if (chords[y] === 4) {
           answer.push(newTriads[1])
     
         }
         if (chords[y] === 5) {
           console.log('found a dominant chord')
           if (newTriads[2][1][1] === '♭') {
             console.log('found ♭ on the 3rd of the dominant chord')
            
             answer.push([newTriads[2][0], newTriads[2][1].replace('♭', '♮'),newTriads[2][2]] )  
             console.log('changed ♭ to ♮ ')
           }
           if (newTriads[2][1].length === 1 && key !== 'D♭') {
             console.log('found no symbol on the 3rd of the dominant chord')
             answer.push([newTriads[2][0], newTriads[2][1] + '♯' ,newTriads[2][2]] )
             console.log(`'sharpened the ${newTriads[2][1]}'`)         
           }
           if (key === 'D♭') {
             console.log('key is D♭ minor, treating it as C♯')
             console.log('found no symbol on the 3rd of the dominant chord')
             answer.push([newTriads[2][0], newTriads[2][1] + '♯' ,newTriads[2][2]] )
             console.log('sharpened the B.')                 
           }     
         }
         if (chords[y] === 6) {
           answer.push(newTriads[3])
     
         }
         if (chords[y] === 7) {
           answer.push(newTriads[4])
     
         }
       }   
     }
     console.log(answer)
     return answer ;
   }

   


   



class App extends React.Component {
state = { key: 'C', major: true, chords: [1, 2, 3, 4, 5, 6, 7] }




    render() {
        
        var majmin = ''
        this.state.major===true?majmin="Major":majmin="Minor"
        const changeToMinor =() => {
            this.setState({major: false})
           }
        const changeToMajor = () => {
            this.setState({major: true})
        }

        
      var answer = triads(this.state.key, this.state.major, this.state.chords)

        return (
                <div>
                   
                    <div className="options">
                        Key:
                    <select onChange={(e) => this.setState({key: e.target.value})}>
                        <option value={'C'}> C </option>
                        <option value={'C♯'} > C♯ </option>
                        <option value={'D♭'} > D♭ </option>
                        <option value={'D'} > D </option>
                        <option value={'E♭'} > E♭ </option>
                        <option value={'E'} > E </option>
                        <option value={'F'} > F </option>
                        <option value={'F♯'} > F♯ </option>
                        <option value={'G♭'} > G♭ </option>
                        <option value={'G'} > G </option>
                        <option value={'A♭'} > A♭ </option>
                        <option value={'A'} > A </option>
                        <option value={'B♭'} > B♭ </option>
                        <option value={'B'} > B </option>
                    </select>
                    <br></br>
                    <div className='modeselector'>
                    Major
                     <input type="radio" name="majmin" id="majmin" onClick={changeToMajor}></input>
                     minor
                     <input type="radio" name="majmin" id="majmin" onClick={changeToMinor}></input>

                    </div>
                    


                    </div>
  
                    <h1>{this.state.key} {majmin}</h1>
                    <div className="chordsGrid">
                        <Chords answer={answer} keyz={this.state.key} major={this.state.major} chords={this.state.chords}> </Chords>

                    </div>
                    
        

                
                </div>
        )
    }
}

export default App;
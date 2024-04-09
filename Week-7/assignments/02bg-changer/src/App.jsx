import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('black');
  return (
    <div style={{ background: color, width: 'full', height: '98vh', 
                  // border: '2px solid red',
                  paddingBottom: '0px', 
                  display: 'grid', alignContent: 'end' 
                }}>
      <div style={{
        background: '#color',
        margin: '0px 0 0 px',
        borderRadius: '23px', 
        padding: '5px 10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 1)',
        height: '25px', justifyContent : 'space-between', display: 'flex',
        width: '70vw',
        // border: '5px solid yellow',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 1)',

      }}>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'red', fontWeight: 'bolder',
          outline: 'none'
        }}
          onClick={() => setColor('red')}
        >Red</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'black', color: 'white', fontWeight: 'bolder'
        }}
          onClick={() => setColor('black')}>Black</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'white', fontWeight: 'bolder'
        }}
          onClick={() => setColor('white')}>White</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'brown', fontWeight: 'bolder'
        }}
          onClick={() => setColor('brown')}>Brown</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'yellow', fontWeight: 'bolder'
        }}
          onClick={() => setColor('yellow')}>Yellow</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'olive', fontWeight: 'bolder'
        }}
          onClick={() => setColor('olive')}>Olive</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'green', fontWeight: 'bolder'
        }}
          onClick={() => setColor('green')}>Green</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'blue', fontWeight: 'bolder'
        }}
          onClick={() => setColor('blue')}>Blue</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'pink', fontWeight: 'bolder'
        }}
          onClick={() => setColor('pink')}>Pink</button>
        <button style={{
          borderRadius: '25px', cursor: 'pointer ', background: 'purple', fontWeight: 'bolder'
        }}
          onClick={() => setColor('purple')}>Purple</button>
      </div>
    </div>
  )
}

export default App
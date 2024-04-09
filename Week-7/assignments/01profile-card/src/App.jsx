import React from 'react'

function App() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center'
    }}>
      <div style={{
        // display : "flex",
        // justifyContent : "center",
        // alignItems : "center",
        flexDirection: "column",
        background: "lightgray",
        width: "20vw",
        margin: '15px 0px'
      }}>
        <div style={{ background: "skyblue", width: "20vw", height: "15vh" }}></div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

        }}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid black",
            position: "relative",
            top: "-50px",
          }} />
          <div style={{ color: 'black', margin: '5px' }}><b>Dexter Ifti</b> 20</div>
          <span>Lucknow</span>
        </div>
        <hr />
        <div>
          <ul style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: 'space-around',
          }}>
            <li><b>100K</b></li>
            <li><b>803K</b></li>
            <li><b>1.4K</b></li>
          </ul>
          <ul style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: 'space-around',
          }}>
            <li>Followers</li>
            <li>Likes</li>
            <li>Photos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
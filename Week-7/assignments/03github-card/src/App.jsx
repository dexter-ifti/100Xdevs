import React, { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [user, setUser] = useState('dexter-ifti')
  const [data, setData] = useState({})
  const [followers, setFollowers] = useState(0)
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [user])
  // console.log(data.avatar_url);
  // const checkFollowers = useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}/followers`)
  //     .then(res => res.json())
  //     .then(data => setFollowers(data.length))
  //   alert(`You have ${followers} followers`)
  // }, [user, followers])
  return (
    <div>
      <h1>Github Card</h1>
      {/* <input type="text" placeholder='Enter Your Github Username' */}
      {/* onInput={(e) => setUser(e.target.value)} /> */}
      <div style={{
        margin: '15px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column',
        width: '20vw', background: 'lightgray'
      }}>
        <div style={{
          height: '10vh', width: '20vw', background: 'lightblue', color: 'red', fontSize: '29px', textAlign: 'center', fontWeight: 'bold', paddingTop: '15px'
        }}>{data.name}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <img src={data.avatar_url} alt="Avatar" style={{
            height: '100px', width: '100px', borderRadius: '50%',
            border: '2px solid black', position: 'relative', top: '-50px'
          }} />
        </div>
        {/* <button onClick={() => checkFollowers}>CLick me to Check folowers</button> */}
      </div>
    </div>
  )
}



export default App
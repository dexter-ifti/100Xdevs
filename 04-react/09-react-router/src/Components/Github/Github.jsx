import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState(0);
  // useEffect( () => {
  //   fetch('https://api.github.com/users/dexter-ifti ')
  //   .then(response => response.json())
  //   .then(data => setData(data))
  // }, [])
  return (
    <div>
      <div className="mx-auto w-full max-w-7xl">
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
      </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/dexter-ifti');
  return response.json();
}
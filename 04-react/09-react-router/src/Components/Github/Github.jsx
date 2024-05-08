import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const followers = useLoaderData();
  // const [followers, setFollowers] = useState(0);
  // useEffect( () => {
  //   fetch('https://api.github.com/users/dexter-ifti ')
  //   .then(response => response.json())
  //   .then(data => setFollowers(data))
  // }, [])
  return (
    <div>
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Github Followers: {followers.followers}</h1>
        <img src={followers.avatar_url} alt="" width={300} />
      </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/dexter-ifti');
  return response.json();
}